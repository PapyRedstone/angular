import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module'
import { MonObj } from './util/mon-obj';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp1';
    monObj = new MonObj("slt", 42);
}
