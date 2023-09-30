import { Injectable } from '@angular/core';
import { HttpEventType } from '@angular/common/http';
import type {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest
} from '@angular/common/http';
import { filter, map, type Observable } from 'rxjs';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // request interceptor
        let requestStartTime = 0;

        if (req.method === 'GET') {
            requestStartTime = Date.now();
        }

        return next.handle(req).pipe(
            filter((event: HttpEvent<any>) => event.type === HttpEventType.Response),
            map((event: HttpEvent<any>) => {
                // do stuff with response
                if (req.method === 'GET') {
                    let requestEndTime = Date.now();
                    console.log(`Timing Interceptor: GET request to ${req.url} took ${requestEndTime - requestStartTime}ms`);
                }
                return event;
            })
        );
    }
}
