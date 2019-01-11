import { Component, OnInit } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';

@Component({
    selector: 'app-all',
    templateUrl: './all.component.html',
    styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
    valueRetour: any;

    constructor(private http: Http){}

    ngAfterViewInit(){
	this.doGET();
    }
    
    ngOnInit() {
    }

    doGET() {
	console.log("GET");
	let url = `http://symf.bzh/api/deplacements`;
	this.http.get(url).subscribe(res => this.valueRetour = res.json());
    }
    
}
