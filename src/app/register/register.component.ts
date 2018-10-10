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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;

  constructor(private apiService: APIService) {
  }

  ngOnInit(){
    this.registerForm = new FormGroup({
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

  get emailInput() { return this.registerForm.get('emailInput'); }
  get passwordInput() { return this.registerForm.get('passwordInput'); }

  onSubmit(){
    this.apiService.register(this.registerForm.value.emailInput, this.registerForm.value.passwordInput);
  }

}
