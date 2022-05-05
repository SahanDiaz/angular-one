import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders:{
                'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
                'X-RapidAPI-Key': 'cbd2ef95fbmsh8181859959054b8p136477jsnab91cf23f7c1',
            },
            setParams: {
                key:'e40e743af2c94b0c916a8aa618fb4473',
            }
        })
        return next.handle(req);
    }
}