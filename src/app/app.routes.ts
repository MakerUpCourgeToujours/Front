import { Routes } from '@angular/router';
import {HomeComponent} from './features/home/home.component';
import {AboComponent} from './features/sub/abo.component';
import {NotfoundComponent} from './features/notfound/notfound.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {path:'abonement',component:AboComponent},




  {path:'**', component: NotfoundComponent}
];
