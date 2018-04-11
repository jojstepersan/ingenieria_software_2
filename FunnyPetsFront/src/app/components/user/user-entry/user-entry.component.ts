import { Component, OnInit } from '@angular/core';
import { UserEntry } from '../../../interfaces/user-entry';
import { PublicacionService } from '../../../services/publicacion.service';

@Component({
    selector: 'app-user-entry',
    templateUrl: './user-entry.component.html',
    styleUrls: ['./user-entry.component.css']
})
export class UserEntryComponent implements OnInit {
    entrys: UserEntry[] = [];

    constructor(private _publicaciones: PublicacionService) { }

    ngOnInit() {
        this._publicaciones.getUsers().subscribe(res => {
            for (let key$ in res) {
                this.entrys.push(res[key$]);
            }
        });
    }
}
