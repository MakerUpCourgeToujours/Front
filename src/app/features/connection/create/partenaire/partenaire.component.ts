import { Component } from '@angular/core';
import {BackDirective} from "../../../../core/Directives/back.directive";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MangeurCreate} from '../../../../core/models/mangeurCreate';
import {newPartenaire} from '../../../../core/models/Partenaire';
import {CreateService} from '../../../../core/services/login/create.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-partenaire',
  standalone: true,
    imports: [
        BackDirective,
        ReactiveFormsModule
    ],
  templateUrl: './partenaire.component.html',
  styleUrl: './partenaire.component.css'
})
export class PartenaireComponent {

constructor(private readonly _router: Router, private readonly createPartenaireservice : CreateService){}

  createPartenaireForm = new FormGroup({
    lastName: new FormControl('', [Validators.required,Validators.max(100)]),
    firstName: new FormControl('', [Validators.required , Validators.max(100)]),
    email: new FormControl('', [Validators.required,Validators.email,Validators.max(255)]),
    password: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required,Validators.maxLength(50),Validators.pattern('^[0-9]+$')]),
    //B2B
    nameCopany: new FormControl('', [Validators.required , Validators.maxLength(50)]),
    typeUserB2B: new FormControl('', [Validators.required , Validators.max(100)]),
    numAdrress: new FormControl('', [Validators.required , Validators.pattern('^[0-9]+$')]),
    street: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    postalCode: new FormControl('', [Validators.required,Validators.pattern('^[0-9]+$')]),
    //TODO voir si le regex est ok pour le nul TVA
    tavNumber: new FormControl('', [Validators.required,Validators.pattern('^BE(0\\d{9}|1\\d{9})$')]),


  })


  isValid(fieldName: string) {
    const control = this.createPartenaireForm.get(fieldName);

    return control?.invalid && (control.valid || control.touched);
  }

  submit(event: SubmitEvent) {


    const NewPartenaire: newPartenaire = {
      firstName: this.createPartenaireForm.controls['firstName']?.value || '',
      lastName : this.createPartenaireForm.controls['lastName']?.value || '',
      email : this.createPartenaireForm.controls['email']?.value || '',
      password : this.createPartenaireForm.controls['password']?.value || '',
      phoneNumber : this.createPartenaireForm.controls['phoneNumber']?.value || '',
      isAdmin : false,
      nameCopany : this.createPartenaireForm.controls['nameCopany']?.value || '',
      typeUserB2B : this.createPartenaireForm.controls['typeUserB2B']?.value || '',
      deliveryLimit : 500,
      numAdrress : this.createPartenaireForm.controls['numAdrress']?.value || '',
      street : this.createPartenaireForm.controls['street']?.value || '',
      city : this.createPartenaireForm.controls['city']?.value || '',
      postalCode : this.createPartenaireForm.controls['postalCode']?.value || '',
      tavNumber : this.createPartenaireForm.controls['tavNumber']?.value || '',
    };


    this.createPartenaireservice.addpartenaire(NewPartenaire).subscribe({
      next: (result) => {
        this._router.navigate(['/login']);
      },
      error: error => {
        console.log(error);
      }
    });




  }

}
