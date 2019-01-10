import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MonObj } from '../util/mon-obj'

@Component({
  selector: 'app-recup',
  templateUrl: './recup.component.html',
  styleUrls: ['./recup.component.css']
})

export class RecupComponent implements OnInit {
    obj:MonObj;
    constructor(private route: ActivatedRoute) { }
    
    ngOnInit() {
	this.route.params.subscribe(param => {
	    let nb = +this.route.snapshot.paramMap.get('nb');
	    this.obj = new MonObj("coucou",nb);
	});
    }

    ngOnDestroy(){}
}
