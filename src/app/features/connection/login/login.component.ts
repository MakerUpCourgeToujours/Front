import { Component } from '@angular/core';
import {BackDirective} from "../../../core/Directives/back.directive";
import {FormBuilder, FormControl, FormGroup, isFormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from '@angular/router';
import {LoginService} from '../../../core/services/login/login.service';
import {loginUser} from '../../../core/models/User';


@Component({
  selector: 'app-login',
  standalone: true,
    imports: [
        BackDirective,
        ReactiveFormsModule
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({
    email : new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _loginService: LoginService,
  ) { }


  submit(event: SubmitEvent){
    const login:loginUser ={
      email: this.loginForm.controls['email']?.value || '',
      password: this.loginForm.controls['password']?.value || '',
    }
    console.log(login)

    this._loginService.login(login).subscribe({next : (result) => {
      this._router.navigateByUrl('/home');
      }, error: error => {
      console.log(error);
      }})



  }





}
