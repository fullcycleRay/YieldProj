import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const currentUser = localStorage.getItem('User');
        const headers = {};
        if (currentUser) {
            headers['Authorization'] = `${currentUser}`;
        }
        headers['Content-Type'] = 'application/json; charset=utf-8';
        headers['Accept'] = 'application/json';
        request = request.clone({
            setHeaders: headers
        });
        return next.handle(request);
    }
}
