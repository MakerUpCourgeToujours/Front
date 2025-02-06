import { Routes } from '@angular/router';
import {HomeComponent} from './features/home/home.component';
import {AboComponent} from './features/sub/abo.component';
import {NotfoundComponent} from './features/notfound/notfound.component';
import {MangeurComponent} from './features/connection/create/mangeur/mangeur.component';
import {PartenaireComponent} from './features/connection/create/partenaire/partenaire.component';
import {LoginComponent} from './features/connection/login/login.component';
import {isLoggedInGuard} from './core/guards/is-logged-in.guard';
import {isRoleB2cGuard} from './core/guards/is-role-b2c.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {path:'abonement',component:AboComponent ,canActivate:[isLoggedInGuard , isRoleB2cGuard]},
  {path:'createmangueur',component:MangeurComponent},
  {path:'createpartenaire',component:PartenaireComponent},
  {path:'login',component:LoginComponent},




  {path:'**', component: NotfoundComponent}
];
