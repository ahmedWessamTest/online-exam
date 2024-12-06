import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthApiService } from 'auth-api';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { MainAuthBtnComponent } from '../../../shared/components/ui/main-auth-btn/main-auth-btn.component';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, PasswordModule, InputTextModule, MainAuthBtnComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private readonly _FormBuilder = inject(FormBuilder)
  private readonly _AuthApiService = inject(AuthApiService);
  private readonly _Router = inject(Router);
  registerForm: FormGroup = this._FormBuilder.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
    rePassword:['',[Validators.required, RxwebValidators.compare({fieldName:'password'})]],
    phone: ['', [Validators.required, Validators.pattern("^01[0125]\\w{8}$")]]
  })
  register(): void {
    if(this.registerForm.valid) {
      console.log("hello");
      // this._AuthApiService.setBaseURL = 'https://exam.elevateegy.com'
      this._AuthApiService.register(this.registerForm.value).subscribe({
        next:(res)=>{
          if(res.message === "success") {
            this._Router.navigate(['blank/home']);
            console.log(res);
          }
        },
        error:(err: any) => {
          console.error("Register API Error: ", err);
        }
      })
    }
  }
}
