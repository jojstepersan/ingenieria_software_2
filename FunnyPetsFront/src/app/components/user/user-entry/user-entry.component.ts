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
    //     { owner: 'Marcos', description: 'Cachorro tranquilo', other:"No adopción", image:"assets/images/m1.jpg" },
    //     { owner: 'Felipe', description: 'Gatito alegre', other: 'Adopción',image:"assets/images/m11.jpg" },
    //     { owner: 'Nadia', description: 'Ave muy feliz', other: 'Adopción',image:"assets/images/m6.jpg" }
    // ];
    constructor(private _publicaciones: PublicacionService) { }

    ngOnInit() {
        this._publicaciones.getUsers().subscribe(res => {
            for (let key$ in res) {
                this.entrys.push(res[key$]);
            }
        });
    }
}
