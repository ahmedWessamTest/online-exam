import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { AuthApiService } from 'auth-api';
import { MainAuthBtnComponent } from '../../../shared/components/ui/main-auth-btn/main-auth-btn.component';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [PasswordModule, MainAuthBtnComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent implements OnInit {
  private readonly _FormBuilder = inject(FormBuilder)
  private readonly _AuthApiService = inject(AuthApiService);
  private readonly _Router = inject(Router);
  private userEmail:string | null = ""
  ngOnInit(): void {
    if (localStorage.getItem("resetEmail")) {
      this.userEmail = localStorage.getItem("resetEmail");
    }
  }
  resetPassForm: FormGroup = this._FormBuilder.group({
    email:[''],
    newPassword: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
    rePassword: ['', [Validators.required, RxwebValidators.compare({ fieldName: 'newPassword' })]],
  })
  submitCode(): void {
    console.log(this.resetPassForm.value);
    if (this.resetPassForm.valid) {
      this.resetPassForm.patchValue({email:this.userEmail});
      const fromObj = this.generateFormObject();
      console.log(fromObj);
      this._AuthApiService.resetPassword(fromObj).subscribe({
        next:(res)=>{
          if (res.message === "success") {
            this._Router.navigate(["blank/home"]);
          }
        },
        error:(err) => {
          console.error("Error in reset password API: ", err);
        }
      })
    }

  }
  generateFormObject():any {
    if(this.resetPassForm.valid){
      const { email, newPassword } = this.resetPassForm.value
      return { email, newPassword }
    }
  }
}
