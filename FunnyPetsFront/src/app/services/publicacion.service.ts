import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { FileUpload } from '../interfaces/file-upload';
import * as firebase from 'firebase';
import { AngularFireDatabase, AngularFireList, snapshotChanges } from 'angularfire2/database';

@Injectable()
export class PublicacionService {
    userEntry: UserEntry[] = [];
    pathUrl: string = 'gs://funnypets-d3a7a.appspot.com/images';

    constructor(private db: AngularFireDatabase) { }

    pushFileToStorage(fileUpload: FileUpload, progress: { percentage: number }) {
        const storageRef = firebase.storage().ref();
        const uploadTask = storageRef.child(`${this.pathUrl}/${fileUpload.file.name}`).put(fileUpload.file);

        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            (snapshot) => {
                const snap = snapshot as firebase.storage.UploadTaskSnapshot;
                progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
            },
            (error) => {
                console.log(error);
            },
            () => {
                fileUpload.url = uploadTask.snapshot.downloadURL;
                fileUpload.name = fileUpload.file.name;
                this.saveFileData(fileUpload);
            }
        );
    }

    private saveFileData(fileUpload: FileUpload) {
        this.db.list(`${this.basePath}/`).push(fileUpload);
    }

    getFileUploads(numberItems): AngularFireList<FileUpload> {
        return this.db.list(this.basePath, ref =>
            ref.limitToLast(numberItems));
    }

    deleteFileUpload(fileUpload: FileUpload) {
        this.deleteFileDatabase(fileUpload.key)
            .then(() => {
                this.deleteFileStorage(fileUpload.name);
            })
            .catch(error => console.log(error));
    }

    private deleteFileDatabase(key: string) {
        return this.db.list(`${this.basePath}/`).remove(key);
    }

    private deleteFileStorage(name: string) {
        const storageRef = firebase.storage().ref();
        storageRef.child(`${this.basePath}/${name}`).delete();
    }

    nuevoUser(userEntry: UserEntry) {

        let body = JSON.stringify(userEntry);
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.post(this.usersUrl, body, { headers })
            .map(res => {
                console.log(res.json());
                return res.json();
            });
    }

    getUser(key$: string) {
        let url = `${this.usersUrl}/${key$}.json`;
        return this.http.get(url).map(res => res.json());

    }

    getUsers() {
        return this.http.get(this.usersUrl).map(res => {
            return res.json();
        });
    }
}
