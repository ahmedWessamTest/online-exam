import { Injectable } from "@angular/core";
import { Adapt } from "../interfaces/adapter";
import { LoginAPIRes } from "../interfaces/LoginAPIResponse";
import { LoginResponse } from "../interfaces/LoginResponse";

@Injectable({
  providedIn:'root'
})
export class AuthLoginAdapter implements Adapt {
  adapt(data: LoginAPIRes): LoginResponse {
      return {
        message: data.message,
        token: data.token,
        userEmail: data.user.email
      }
  }
}
