import { HttpInterceptorFn } from '@angular/common/http';

export const serverUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const baseUrl = 'https://exam.elevateegy.com'
  if(!req.url.startsWith('http')) {
    const modifiedReq = req.clone({
      url:`${baseUrl}${req.url}`
    })
    return next(modifiedReq)
  }
  return next(req)
};
