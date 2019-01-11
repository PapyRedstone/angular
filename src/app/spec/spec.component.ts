import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Headers, URLSearchParams } from '@angular/http';

@Component({
  selector: 'app-spec',
  templateUrl: './spec.component.html',
  styleUrls: ['./spec.component.css']
})

export class SpecComponent implements OnInit {
    valueRetour: any;
    id: any;
    year: any;
    month: any;
    
    constructor(private http: Http, private route: ActivatedRoute) {}
    
    ngAfterViewInit(){
	this.doGet();
    }
    
    ngOnInit() {
	this.route.params.subscribe(param => {
	    this.id = this.route.snapshot.paramMap.get("id");
	    this.year = this.route.snapshot.paramMap.get("year");
	    this.month = this.route.snapshot.paramMap.get("month");
	});
    }
    
    doGet() {
	console.log("Get");
	let url = `http://symf.bzh/api/deplacements/user/`+
	    this.id+
	    "/annee/"+
	    this.year+
	    "/mois/"+
	    this.month;
	this.http.get(url).subscribe(res => this.valueRetour = res.json());
    }
}
