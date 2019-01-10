import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { RecupComponent } from './recup/recup.component';
import { NotfoundComponent } from './notfound/notfound.component';


const appRoutes: Routes = [
    {path:'', component: HomeComponent},
    {path:'recup/:nb', component: RecupComponent},
    {path:'form', component: FormComponent},
    {path:'**', component: NotfoundComponent}
];

@NgModule({
    imports: [
	RouterModule.forRoot(appRoutes)
    ],
    exports: [
	RouterModule
    ],
    providers: []
})
export class AppRoutingModule { }
