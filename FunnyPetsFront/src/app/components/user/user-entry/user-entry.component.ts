import { Component, OnInit } from '@angular/core';
import { UserEntry } from '../../../interfaces/user-entry';

@Component({
    selector: 'app-user-entry',
    templateUrl: './user-entry.component.html',
    styleUrls: ['./user-entry.component.css']
})
export class UserEntryComponent implements OnInit {
    entrys: UserEntry[] = [
        { owner: 'Marcos', description: 'Cachorro tranquilo', other:"No adopción", image:"assets/images/m1.jpg" },
        { owner: 'Felipe', description: 'Gatito alegre', other: 'Adopción',image:"assets/images/m11.jpg" },
        { owner: 'Nadia', description: 'Ave muy feliz', other: 'Adopción',image:"assets/images/m6.jpg" }
    ];
    constructor() { }

    ngOnInit() {
    }

hola(){
console.log("hola mundolendo!!!!");

}
}
