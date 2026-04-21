import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class TestInterceptor2 implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);

    return next.handle(req).pipe(
        tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
            console.log(event);
        }
        })
    );
    }
}
