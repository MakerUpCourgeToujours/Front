import { Component } from '@angular/core';
import {BackDirective} from '../../../../core/Directives/back.directive';
import {MangeurCreate} from '../../../../core/models/mangeurCreate';
import {FormControl, FormGroup, MaxValidator, ReactiveFormsModule, Validators} from '@angular/forms';
import {CreateService} from '../../../../core/services/login/create.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mangeur',
  standalone: true,
  imports: [
    BackDirective,
    ReactiveFormsModule,
  ],
  templateUrl: './mangeur.component.html',
  styleUrl: './mangeur.component.css'
})
export class MangeurComponent {

  constructor(private readonly _router: Router, private readonly _mangeurservices :CreateService) {
  }

  createMangeur = new FormGroup({
    lastName: new FormControl('', [Validators.required,Validators.max(100)]),
    firstName: new FormControl('', [Validators.required , Validators.max(100)]),
    email: new FormControl('', [Validators.required,Validators.email,Validators.max(255)]),
    password: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required,Validators.maxLength(50),Validators.pattern('^[0-9]+$')]),
  });

  submit(event: SubmitEvent) {

    const NewMangeur: MangeurCreate = {
      firstName: this.createMangeur.controls['firstName']?.value || '',
      lastName : this.createMangeur.controls['lastName']?.value || '',
      email : this.createMangeur.controls['email']?.value || '',
      password : this.createMangeur.controls['password']?.value || '',
      phoneNumber : this.createMangeur.controls['phoneNumber']?.value || '',
      isAdmin : false,
      idAbonement : 0
    }
    this._mangeurservices.addMangeur(NewMangeur).subscribe({
      next: (result) => {
        this._router.navigate(['/login']);
      },
      error: error => {
        console.log(error);
      }
    });



  }
}
