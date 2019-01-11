import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Headers, URLSearchParams } from '@angular/http';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
    valueRetour: any;
    id: any;
    constructor(private http: Http, private route: ActivatedRoute) {}

    ngAfterViewInit(){
	this.doGet();
    }
    
    ngOnInit() {
	this.route.params.subscribe(param => {
	    this.id = this.route.snapshot.paramMap.get("id");
	});
    }
    
    doGet() {
	console.log("Get");
	let url = `http://symf.bzh/api/deplacements/user/`+this.id;
	this.http.get(url).subscribe(res => this.valueRetour = res.json());
    }
}
