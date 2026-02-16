import { Routes } from '@angular/router';
import { JohtoRegionComponent } from './johto-region/johto-region.component';
import { KantoRegionComponent } from './kanto-region/kanto-region.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
    {path:'home',component:HomeComponent},
     //Shakes Menu (localhost:4200/shakes)
    {path:'kanto',component:KantoRegionComponent},
    //Desserts Menu (localhost:4200/desserts)
    {path:'johto',component:JohtoRegionComponent},

    //Default Redirect (localhost:4200/)
    {path:'', redirectTo:'home', pathMatch:'full'}

];
