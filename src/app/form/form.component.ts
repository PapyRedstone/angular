import { Component, OnInit } from '@angular/core';

class Personne{
    nom: string;
    prenom: string;
    genre: number;
}

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    personne: Personne;
    txt:string;
    
    constructor() { }

    register(){
	console.log(this.personne);
	this.txt = "Nom : " + this.personne.nom + ", prenom : " + this.personne.prenom;
    }
    
    ngOnInit() {
	this.personne = new Personne();
    }

}
