export class MonObj {
       private libelle:string;
       private valeur:number;

    constructor(txt:string, nb:number){
		this.libelle = txt;
		this.valeur = nb;
       }

       get Libelle():string{return this.libelle;}
       set Libelle(l:string){this.libelle = l;}
       get Valeur():number{return this.valeur;}
       set Valeur(v:number){this.valeur = v;}

       affiche1():string{return "Et voila " + this.libelle;}
       affiche2():string{return "Et voila " + this.valeur;}
}
