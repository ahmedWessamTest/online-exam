import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "auth"
  },
  {
    path: "auth",
    loadComponent: () => import("./core/layouts/auth-layout/auth-layout.component").then(c => c.AuthLayoutComponent),
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "login"
      },
      {
        path: "login",
        loadComponent: () => import("./core/pages/login/login.component").then(c => c.LoginComponent)
      },
      {
        path: "register",
        loadComponent: () => import("./core/pages/register/register.component").then(c => c.RegisterComponent)
      },
      {
        path: "forgotPass",
        loadComponent: () => import("./core/pages/forget-password/forget-password.component").then(c => c.ForgetPasswordComponent)
      },
      {
        path: "verifyCode",
        loadComponent: () => import("./core/pages/verify-code/verify-code.component").then(c => c.VerifyCodeComponent)
      },
      {
        path: "resetPassword",
        loadComponent: () => import("./core/pages/reset-password/reset-password.component").then(c => c.ResetPasswordComponent)
      },

    ]
  },
  {
    path: "blank",
    loadComponent: () => import("./core/layouts/blank-layout/blank-layout.component").then(c => c.BlankLayoutComponent),
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "home",
      },
      {
        path: "home",
        loadComponent: () => import("./core/pages/home/home.component").then(c => c.HomeComponent)
      }
    ]
  }
];
