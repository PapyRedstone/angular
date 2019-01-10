import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ColLeftComponent } from './col-left/col-left.component';
import { ColRightComponent } from './col-right/col-right.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { RecupComponent } from './recup/recup.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
    declarations: [
	AppComponent,
	ColLeftComponent,
	ColRightComponent,
	HomeComponent,
	FormComponent,
	RecupComponent,
	NotfoundComponent
    ],
    imports: [
	BrowserModule,
	FormsModule,
	AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
