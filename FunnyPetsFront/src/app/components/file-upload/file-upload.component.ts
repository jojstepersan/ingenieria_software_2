import { Component, OnInit } from '@angular/core';
import { AngularFireUploadTask, AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

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

    constructor(private storage: AngularFireStorage, private db: AngularFirestore) { }

    ngOnInit() {
    }

    toggleHover(event: boolean) {
        this.isHovering = event;
    }

    startUpload(event: FileList) {
        let uid: string = 'UnFunny';
        let post: string = 'post';
        const file = event.item(0);
        if (file.type.split('/')[0] !== 'image') {
            console.error('tipo de archivo no soportado');
            return;
        }
        const path = `images/${new Date().getTime()}_${file.name}`;
        const customMetadata = { app: 'FunnyPets', uid: uid, post: post };
        this.task = this.storage.upload(path, file, { customMetadata });
        this.percentage = this.task.percentageChanges();
        this.snapshot = this.task.snapshotChanges();
        this.downloadUrl = this.task.downloadURL();
    }

    isActive(snapshot) {
        return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
    }
}
