import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AllComponent } from './all/all.component';
import { UserComponent } from './user/user.component';
import { SpecComponent } from './spec/spec.component';

@NgModule({
    declarations: [
	AppComponent,
	HomeComponent,
	NotfoundComponent,
	AllComponent,
	UserComponent,
	SpecComponent
    ],
    imports: [
	BrowserModule,
	FormsModule,
	AppRoutingModule,
	HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
