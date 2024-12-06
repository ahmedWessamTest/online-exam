import { inject, Injectable } from '@angular/core';
import { AuthAPIAps } from './base/AuthAPI.abstract';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { LoginAPIRes } from './interfaces/LoginAPIResponse';
import { AuthEndpoints } from './enums/AuthAPI.endpoints';
import { AuthLoginAdapter } from './adapter/auth-login.adapter';
import { AuthRegisterAdapter } from './adapter/auth-register.adapter';
import { RegisterAPIRes } from './interfaces/RegisterAPIRresponse';
import { ForgotPasswordAPIResponse } from './interfaces/ForgotPassowrdAPIResponse';
import { AuthForgotPasswordAuthService } from './adapter/auth-forgot-password-auth.adapter';
import { verifyCodeResponse } from './interfaces/verifyCodeResponse';
import { verifyCodeObj } from './interfaces/verifyCodeObj';
import { ResetPasswordObj } from './interfaces/resetPassowrdObj';
import { ResetPasswordResponse } from './interfaces/resetPasswordResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService implements AuthAPIAps {
  private baseURL:string = '';
  set setBaseURL(url:string) {
    this.baseURL = url;
  }
  private readonly _HttpClient = inject(HttpClient);
  private readonly _AuthLoginAdapter = inject(AuthLoginAdapter)
  private readonly _AuthRegisterAdapter = inject(AuthRegisterAdapter)
  private readonly _AuthForgotPasswordAuthService = inject(AuthForgotPasswordAuthService)

  login(data: LoginAPIRes): Observable<any> {
    return this._HttpClient.post(AuthEndpoints.LOGIN,data).pipe(
      map((res: any) => this._AuthLoginAdapter.adapt(res)),
      catchError((err:any) => {
        return of(err);
      })
    )
  }
  register(data: RegisterAPIRes): Observable<any> {
    return this._HttpClient.post(AuthEndpoints.REGISTER, data).pipe(
      map((res:any) => this._AuthRegisterAdapter.adapt(res)),
      catchError((err:any) => {
        return of(err);
      })
    )
  }
  forgotPassword(data: ForgotPasswordAPIResponse): Observable<any> {
    return this._HttpClient.post(AuthEndpoints.FORGET_PASSWORD, data).pipe(
      map((res:any) => this._AuthForgotPasswordAuthService.adapt(res)),
      catchError((err:any) => {
        return of(err);
      })
    )
  }
  verifyCode(data: verifyCodeObj): Observable<any> {
    return this._HttpClient.post(AuthEndpoints.VERIFY_CODE,data)
  }
  resetPassword(data: ResetPasswordObj): Observable<any> {
    return this._HttpClient.put(AuthEndpoints.RESET_PASSWORD,data);
  }
}
