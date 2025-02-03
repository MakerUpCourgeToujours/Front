import { Component } from '@angular/core';
import {BackDirective} from "../../../../core/Directives/back.directive";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MangeurCreate} from '../../../../core/models/mangeurCreate';
import {newPartenaire} from '../../../../core/models/Partenaire';

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


  createPartenaireForm = new FormGroup({
    lastName: new FormControl('', [Validators.required,Validators.max(100)]),
    firstName: new FormControl('', [Validators.required , Validators.max(100)]),
    email: new FormControl('', [Validators.required,Validators.email,Validators.max(255)]),
    password: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required,Validators.maxLength(50),Validators.pattern('^[0-9]+$')]),
    //B2B
    nameCopany: new FormControl('', [Validators.required , Validators.maxLength(50)]),
    typeUserB2B: new FormControl('', [Validators.required , Validators.max(100)]),
    numAdrress: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    postalCode: new FormControl('', [Validators.required,Validators.pattern('^[0-9]+$')]),
    //TODO voir si le regex est ok pour le nul TVA
    tavNumber: new FormControl('', [Validators.required,Validators.pattern('/^BE(0\\d{9}|1\\d{9})$/')]),


  })


  isValid(fieldName: string) {
    const control = this.createPartenaireForm.get(fieldName);

    return control?.invalid && (control.valid || control.touched);
  }

  submit(event: SubmitEvent) {

    console.log("submit");


  }

}
