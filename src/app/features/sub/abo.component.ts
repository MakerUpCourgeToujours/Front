import {Component, OnInit} from '@angular/core';
import {SubType} from '../../core/models/subscrible';
import {ActivatedRoute} from '@angular/router';
import {SubtypeService} from '../../core/services/sub/subtype.service';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-abo',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './abo.component.html',
  styleUrl: './abo.component.css'
})
export class AboComponent implements OnInit {


  Subs : SubType[] = [];

  constructor(private readonly route: ActivatedRoute, private readonly subTypeService:SubtypeService ) {}
  ngOnInit(): void {

   this.subTypeService.GetAll().subscribe({
     next: data => {
       this.Subs = data;
       console.log(this.Subs);
     },
     error: err => {
       console.error(err);
     }
   });

  }

}
