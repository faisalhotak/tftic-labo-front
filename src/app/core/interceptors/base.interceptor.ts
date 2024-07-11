import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const baseInterceptor: HttpInterceptorFn = (req, next) => {
  req = req.clone({
    url: `${environment.baseUrl}${req.url}`,
  });

  return next(req);
};
