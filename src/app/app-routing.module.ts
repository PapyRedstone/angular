import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AllComponent } from './all/all.component';
import { UserComponent } from './user/user.component';
import { SpecComponent } from './spec/spec.component';
import { NotfoundComponent } from './notfound/notfound.component';

const appRoutes: Routes = [
    {path:'', component: HomeComponent},
    {path:'all', component: AllComponent},
    {path:'user/:id', component: UserComponent},
    {path:'spec/user/:id/annee/:year/mois/:month', component: SpecComponent},
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
