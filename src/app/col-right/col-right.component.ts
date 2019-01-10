import { Component, OnInit, Input } from '@angular/core';
import { MonObj } from '../util/mon-obj';

@Component({
  selector: 'app-col-right',
  templateUrl: './col-right.component.html',
  styleUrls: ['./col-right.component.css']
})
export class ColRightComponent implements OnInit {
  @Input() obj: MonObj;

  constructor() { }

  ngOnInit() {
  }
}
