import {Component, OnInit} from '@angular/core';
import {Subchose, SubType} from '../../core/models/subscrible';
import {ActivatedRoute} from '@angular/router';
import {SubtypeService} from '../../core/services/sub/subtype.service';
import {CurrencyPipe} from '@angular/common';
import {DepotGasap} from '../../core/models/depot';

@Component({
  selector: 'app-abo',
  standalone: true,
  imports: [

  ],
  templateUrl: './abo.component.html',
  styleUrl: './abo.component.css'
})
export class AboComponent implements OnInit {


  Subs : SubType[] = [];
  depots:DepotGasap[] = [];
  choseSubType : Subchose[]=[];
  infosub : number = 0;

  constructor(private readonly route: ActivatedRoute, private readonly subTypeService:SubtypeService ) { }
  ngOnInit(): void {
  console.log(this.infosub);

   this.subTypeService.GetAll().subscribe({
     next: data => {
       this.Subs = data;
       console.log(this.Subs);
     },
     error: err => {
       console.error(err);
     }
   });

   this.subTypeService.GetAllDepot().subscribe({
     next: data => {
       this.depots = data;
       console.log(data);
     },
     error: err => {
       console.error(err);
     }
   })

  }

  onSubChange(event: Event , taille:string): void {
    const target = event.target as HTMLInputElement;
    this.infosub = parseInt(target.value, 10);
    console.log(taille);
  }



}
