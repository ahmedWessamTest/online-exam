import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthApiService } from 'auth-api';
import { MainAuthBtnComponent } from '../../../shared/components/ui/main-auth-btn/main-auth-btn.component';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [InputTextModule, MainAuthBtnComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {
  private readonly _FormBuilder = inject(FormBuilder)
  private readonly _AuthApiService = inject(AuthApiService);
  private readonly _Router = inject(Router);
  forgotForm: FormGroup = this._FormBuilder.group({
    email: ['', [Validators.required, Validators.email]],
  })
  sendEmail(): void {
    if (this.forgotForm.valid) {
      // this._AuthApiService.setBaseURL = "https://exam.elevateegy.com"
      this._AuthApiService.forgotPassword(this.forgotForm.value).subscribe({
        next:(res)=>{
          if(res.message === "success") {
            localStorage.setItem("resetEmail", this.forgotForm.value.email);
            this._Router.navigate(['auth/verifyCode']);
          }
        },
        error:(err) => {
          console.error("Error in forgot API:", err);
        }
      })
    }
  }
}
