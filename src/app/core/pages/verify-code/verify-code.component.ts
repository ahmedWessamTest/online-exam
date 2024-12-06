import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthApiService } from 'auth-api';
import { MainAuthBtnComponent } from '../../../shared/components/ui/main-auth-btn/main-auth-btn.component';
import { InputTextModule } from 'primeng/inputtext';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-verify-code',
  standalone: true,
  imports: [InputTextModule, MainAuthBtnComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './verify-code.component.html',
  styleUrl: './verify-code.component.scss'
})
export class VerifyCodeComponent {
  private readonly _FormBuilder = inject(FormBuilder)
  private readonly _AuthApiService = inject(AuthApiService);
  private readonly _Router = inject(Router);
  verifyCodeForm: FormGroup = this._FormBuilder.group({
    resetCode: ['', [Validators.required, Validators.maxLength(6), Validators.minLength(6)]],
  })
  submitCode(): void {
    if (this.verifyCodeForm.valid) {
      console.log("a");

      // this._AuthApiService.setBaseURL = "https://exam.elevateegy.com"
      this._AuthApiService.verifyCode(this.verifyCodeForm.value).subscribe({
        next: (res) => {
          if (res.status === "Success") {
            this._Router.navigate(['auth/resetPassword']);
            console.log("success");
          }
        },
        error: (err) => {
          console.error("Error in forgot API:", err);
        }
      })
    }
  }
}
