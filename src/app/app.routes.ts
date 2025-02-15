import { Routes } from '@angular/router';
import {HomeComponent} from './features/home/home.component';
import {AboComponent} from './features/sub/abo.component';
import {NotfoundComponent} from './features/notfound/notfound.component';
import {MangeurComponent} from './features/connection/create/mangeur/mangeur.component';
import {PartenaireComponent} from './features/connection/create/partenaire/partenaire.component';
import {LoginComponent} from './features/connection/login/login.component';
import {isLoggedInGuard} from './core/guards/is-logged-in.guard';
import {isRoleB2cGuard} from './core/guards/is-role-b2c.guard';
import {ProductlocComponent} from './features/productUnit/productloc/productloc.component';
import {ProductvegetComponent} from './features/productUnit/productveget/productveget.component';
import {isRoleB2bGuard} from './core/guards/is-role-b2b.guard';
import {ProductUniteDetailComponent} from './features/productUnit/product-unite-detail/product-unite-detail.component';
import {AdminComponent} from './features/admin/admin.component';
import {ProductListComponent} from './features/admin/product-list/product-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {path:'abonement',component:AboComponent ,canActivate:[isLoggedInGuard , isRoleB2cGuard]},
  {path:'createmangueur',component:MangeurComponent},
  {path:'createpartenaire',component:PartenaireComponent},
  {path:'login',component:LoginComponent},
  {path:'productvegetable',component:ProductvegetComponent ,canActivate:[isLoggedInGuard , isRoleB2bGuard]},
  {path:'productlocal',component:ProductlocComponent,canActivate:[isLoggedInGuard , isRoleB2bGuard]},
  {path:'details/:id',component:ProductUniteDetailComponent,canActivate:[isLoggedInGuard , isRoleB2bGuard]},
  {path:'admin',component:AdminComponent,canActivate:[isLoggedInGuard]},
  {path:'productadmin',component:ProductListComponent,canActivate:[isLoggedInGuard]},




  {path:'**', component: NotfoundComponent}
];
