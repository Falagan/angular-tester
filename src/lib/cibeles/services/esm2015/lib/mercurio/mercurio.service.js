/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
/**
 * @template T
 */
export class MercurioService {
    /**
     * @param {?} config
     * @param {?} httpClient
     */
    constructor(config, httpClient) {
        this.httpClient = httpClient;
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        this.url = config.servers.mercurio;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    post(request) {
        /** @type {?} */
        const body = {
            Entrada: request,
            Id: '',
            Metodo: '',
            Servicio: 'servicios',
            Tipo: '',
            URL: this.url
        };
        return this.httpClient.post(this.url, body, this.httpOptions);
    }
    /**
     * @param {?} request
     * @return {?}
     */
    get(request) {
        return this.httpClient.get(this.url);
    }
}
MercurioService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
MercurioService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }] },
    { type: HttpClient }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    MercurioService.prototype.httpOptions;
    /**
     * @type {?}
     * @private
     */
    MercurioService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    MercurioService.prototype.httpClient;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyY3VyaW8uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlcnZpY2VzLyIsInNvdXJjZXMiOlsibGliL21lcmN1cmlvL21lcmN1cmlvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBQyxVQUFVLEVBQUUsV0FBVyxFQUFDLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFPN0QsTUFBTSxPQUFPLGVBQWU7Ozs7O0lBSTFCLFlBQXdCLE1BQXNCLEVBQVUsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUU1RSxJQUFJLENBQUMsV0FBVyxHQUFHO1lBQ2pCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQztnQkFDdkIsY0FBYyxFQUFFLG1DQUFtQzthQUNwRCxDQUFDO1NBQ0gsQ0FBQztRQUVGLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsT0FBVTs7Y0FFUCxJQUFJLEdBQW9CO1lBQzVCLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLEVBQUUsRUFBRSxFQUFFO1lBQ04sTUFBTSxFQUFFLEVBQUU7WUFDVixRQUFRLEVBQUUsV0FBVztZQUNyQixJQUFJLEVBQUUsRUFBRTtZQUNSLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztTQUNkO1FBRUQsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBbUIsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLE9BQXdCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQW1CLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7WUFoQ0YsVUFBVTs7Ozs0Q0FLSSxRQUFRO1lBWGYsVUFBVTs7Ozs7OztJQVFoQixzQ0FBOEM7Ozs7O0lBQzlDLDhCQUFvQjs7Ozs7SUFFNEIscUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBPcHRpb25hbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtTZXJ2aWNlc0NvbmZpZ30gZnJvbSAnLi4vc2VydmljZXMuY29uZmlnLmludGVyZmFjZSc7XG5pbXBvcnQge01lcmN1cmlvQm9keSwgTWVyY3VyaW9SZXF1ZXN0LCBNZXJjdXJpb1Jlc3BvbnNlfSBmcm9tICdjaWJlbGVzL21vZGVscyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1lcmN1cmlvU2VydmljZTxUPiB7XG4gIHByaXZhdGUgaHR0cE9wdGlvbnM6IHsgaGVhZGVyczogSHR0cEhlYWRlcnMgfTtcbiAgcHJpdmF0ZSB1cmw6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBjb25maWc6IFNlcnZpY2VzQ29uZmlnLCBwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQpIHtcblxuICAgIHRoaXMuaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIHRoaXMudXJsID0gY29uZmlnLnNlcnZlcnMubWVyY3VyaW87XG4gIH1cblxuICBwb3N0KHJlcXVlc3Q6IFQpOiBPYnNlcnZhYmxlPE1lcmN1cmlvUmVzcG9uc2U+IHtcblxuICAgIGNvbnN0IGJvZHk6IE1lcmN1cmlvQm9keTxUPiA9IHtcbiAgICAgIEVudHJhZGE6IHJlcXVlc3QsXG4gICAgICBJZDogJycsXG4gICAgICBNZXRvZG86ICcnLFxuICAgICAgU2VydmljaW86ICdzZXJ2aWNpb3MnLFxuICAgICAgVGlwbzogJycsXG4gICAgICBVUkw6IHRoaXMudXJsXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucG9zdDxNZXJjdXJpb1Jlc3BvbnNlPih0aGlzLnVybCwgYm9keSwgdGhpcy5odHRwT3B0aW9ucyk7XG4gIH1cblxuICBnZXQocmVxdWVzdDogTWVyY3VyaW9SZXF1ZXN0KTogT2JzZXJ2YWJsZTxNZXJjdXJpb1Jlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQ8TWVyY3VyaW9SZXNwb25zZT4odGhpcy51cmwpO1xuICB9XG59XG4iXX0=