import { Component, inject } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { MainAuthBtnComponent } from "../../../shared/components/ui/main-auth-btn/main-auth-btn.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthApiService } from 'auth-api';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [PasswordModule, InputTextModule, MainAuthBtnComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private readonly _FormBuilder = inject(FormBuilder)
  private readonly _AuthApiService = inject(AuthApiService);
  private readonly _Router = inject(Router);
  loginForm:FormGroup = this._FormBuilder.group({
    email:['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]]
  })
  login():void {
    if(this.loginForm.valid) {
      // this._AuthApiService.setBaseURL = "https://exam.elevateegy.com"
      this._AuthApiService.login(this.loginForm.value).subscribe({
        next:(res)=> {
          if(res.message === "success") {
            this._Router.navigate(["blank/home"]);
          }
        },
        error:(err) => {
          console.error("login error: ", err);
        }
      })
    }
  }
}
