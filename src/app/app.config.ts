import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { serverUrlInterceptor } from './core/interceptors/srver-url.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), BrowserModule, provideHttpClient(withFetch(), withInterceptors([serverUrlInterceptor])), provideZoneChangeDetection({ eventCoalescing: true }), ],
};
