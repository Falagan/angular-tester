import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServicesConfig } from '../services.config.interface';
import { MercurioRequest, MercurioResponse } from 'cibeles/models';
export declare class MercurioService<T> {
    private httpClient;
    private httpOptions;
    private url;
    constructor(config: ServicesConfig, httpClient: HttpClient);
    post(request: T): Observable<MercurioResponse>;
    get(request: MercurioRequest): Observable<MercurioResponse>;
}
