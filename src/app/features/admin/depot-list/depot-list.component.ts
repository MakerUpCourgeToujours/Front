import {Component, OnInit} from '@angular/core';
import {NavbarAdminComponent} from "../navbar-admin/navbar-admin.component";
import {SubtypeService} from '../../../core/services/sub/subtype.service';
import {DepotGasap} from '../../../core/models/depot';

@Component({
  selector: 'app-depot-list',
  standalone: true,
    imports: [
        NavbarAdminComponent
    ],
  templateUrl: './depot-list.component.html',
  styleUrl: './depot-list.component.css'
})
export class DepotListComponent implements OnInit {

  depots: DepotGasap[];


  constructor(private _depotservices:SubtypeService) {
  }


  ngOnInit(): void {

    this._depotservices.GetAllDepot().subscribe(depots => this.depots = depots);

    }



}
