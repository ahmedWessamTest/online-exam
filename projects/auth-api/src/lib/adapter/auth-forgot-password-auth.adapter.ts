import { Injectable } from '@angular/core';
import { ForgotPasswordAPIResponse } from '../interfaces/ForgotPassowrdAPIResponse';
import { ForgotPasswordResponse } from '../interfaces/ForgotPassowrdResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthForgotPasswordAuthService {
  adapt(data: ForgotPasswordAPIResponse):ForgotPasswordResponse {
    return {
      message: data.message
    }
  }
}
