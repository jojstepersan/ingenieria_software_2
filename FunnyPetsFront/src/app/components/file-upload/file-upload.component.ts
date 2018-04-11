import { Component, OnInit } from '@angular/core';
import { AngularFireUploadTask, AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../../services/auth.service';
import { PublicacionService } from '../../services/publicacion.service';
import * as firebase from 'firebase/app';
import { UserEntry } from '../../interfaces/user-entry';
import { FileUpload } from '../../interfaces/file-upload';


@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.css']
})


export class FileUploadComponent implements OnInit {
    task: AngularFireUploadTask;
    percentage: Observable<number>;
    snapshot: Observable<any>;
    downloadUrl: Observable<string>;
    isHovering: boolean;
    selectedFiles: FileList;
    description: string;
    currentFileUpload: FileUpload;
    userEntry: UserEntry = {
        image: '',
        owner: '',
        name: '',
        description: '',
        other: ''
    };

    constructor(private storage: AngularFireStorage,
        private db: AngularFirestore,
        private _postService: PublicacionService,
        private _AuthService: AuthService,
        private router: Router) { }

    ngOnInit() {
    }

    toggleHover(event: boolean) {
        this.isHovering = event;
    }

    detectFile(event: FileList) {
        this.selectedFiles = event;
    }

    startUpload() {
        let uid: string = this._AuthService.getuserID();
        let post: string = 'post';
        const file = this.selectedFiles.item(0);
        if (file.type.split('/')[0] !== 'image') {
            console.error('tipo de archivo no soportado');
            return;
        }
        const path = `images/${new Date().getTime()}_${file.name}`;
        const customMetadata = { app: 'FunnyPets', uid: uid, post: post };
        this.currentFileUpload = new FileUpload(file);
        this._postService.pushFileToStorage(file, this.percentage);
        this._postService.getFileUploads()
        // this.task = this.storage.upload(path, file, { customMetadata });
        // this.percentage = this.task.percentageChanges();
        // this.snapshot = this.task.snapshotChanges();
        // this.downloadUrl = this.task.downloadURL();
        // console.log('entra en promesa');
        this.task.downloadURL().map(res => {
            this.userEntry.image = res;
            console.log(res.toString());
        }).subscribe();
        this.userEntry.owner = uid;
        this.userEntry.name = this._AuthService.getUser();
        this.userEntry.description = this.description;
        this._postService.nuevoUser(this.userEntry)
            .subscribe(data => {
            }, error => console.error(error));
    }

    isActive(snapshot) {
        return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
    }
}
