import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

Injectable()
export class Interceptor implements HttpInterceptor {
    constructor() { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (localStorage.getItem('authToken') != null) {
            const wso2AccessKey = environment.wso2AccessKey;
            const authToken = localStorage.getItem('authToken');
            const headers = new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'custom': `${authToken}`,
                'Authorization': `${wso2AccessKey}`
            })
            const AuthRequest = req.clone({ headers: headers });
            return next.handle(AuthRequest);
        } else {
            return next.handle(req);
        }
    }
}