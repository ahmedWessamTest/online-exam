import { Injectable } from "@angular/core";
import { Adapt } from "../interfaces/adapter";
import { RegisterAPIRes } from "../interfaces/RegisterAPIRresponse";
import { RegisterResponse } from "../interfaces/RegisterResponse";

@Injectable({
  providedIn:'root'
})
export class AuthRegisterAdapter implements Adapt {
  adapt(data: RegisterAPIRes): RegisterResponse {
      return {
        message: data.message,
        token: data.token,
        userEmail: data.user.email
      }
  }
}
