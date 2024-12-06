import { Observable } from "rxjs";
import { LoginAPIRes } from "../interfaces/LoginAPIResponse";
import { RegisterAPIRes } from "../interfaces/RegisterAPIRresponse";
import { ForgotPasswordAPIResponse } from "../interfaces/ForgotPassowrdAPIResponse";
import { verifyCodeResponse } from "../interfaces/verifyCodeResponse";
import { verifyCodeObj } from "../interfaces/verifyCodeObj";
import { ResetPasswordObj } from "../interfaces/resetPassowrdObj";
import { ResetPasswordResponse } from "../interfaces/resetPasswordResponse";

export abstract class AuthAPIAps {
  abstract login(data:LoginAPIRes): Observable<any>;
  abstract register(data: RegisterAPIRes):Observable<any>;
  abstract forgotPassword(data: ForgotPasswordAPIResponse):Observable<any>;
  abstract verifyCode(data: verifyCodeObj): Observable<verifyCodeResponse>;
  abstract resetPassword(data: ResetPasswordObj):Observable<ResetPasswordResponse>;
}
