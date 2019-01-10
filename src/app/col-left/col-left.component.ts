import { Component, OnInit, Input } from '@angular/core';
import { MonObj } from '../util/mon-obj';

@Component({
  selector: 'app-col-left',
  templateUrl: './col-left.component.html',
  styleUrls: ['./col-left.component.css']
})
export class ColLeftComponent implements OnInit {
   @Input() obj: MonObj

  constructor() { }

  ngOnInit() {
  }

}
