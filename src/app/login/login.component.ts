import {
  NgModule,
  Component,
  Pipe,
  OnInit
} from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { APIService } from  '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor(private apiService: APIService) {
  }

  ngOnInit(){
    this.loginForm = new FormGroup({
      'emailInput': new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]),
      'passwordInput': new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  get emailInput() { return this.loginForm.get('emailInput'); }
  get passwordInput() { return this.loginForm.get('passwordInput'); }

  onSubmit(){
    this.apiService.login(this.loginForm.value.emailInput, this.loginForm.value.passwordInput);
  }

}
