/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
/**
 * @template T
 */
var MercurioService = /** @class */ (function () {
    function MercurioService(config, httpClient) {
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
    MercurioService.prototype.post = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        /** @type {?} */
        var body = {
            Entrada: request,
            Id: '',
            Metodo: '',
            Servicio: 'servicios',
            Tipo: '',
            URL: this.url
        };
        return this.httpClient.post(this.url, body, this.httpOptions);
    };
    /**
     * @param {?} request
     * @return {?}
     */
    MercurioService.prototype.get = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        return this.httpClient.get(this.url);
    };
    MercurioService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    MercurioService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }] },
        { type: HttpClient }
    ]; };
    return MercurioService;
}());
export { MercurioService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyY3VyaW8uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlcnZpY2VzLyIsInNvdXJjZXMiOlsibGliL21lcmN1cmlvL21lcmN1cmlvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBQyxVQUFVLEVBQUUsV0FBVyxFQUFDLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFNN0Q7SUFLRSx5QkFBd0IsTUFBc0IsRUFBVSxVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRTVFLElBQUksQ0FBQyxXQUFXLEdBQUc7WUFDakIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO2dCQUN2QixjQUFjLEVBQUUsbUNBQW1DO2FBQ3BELENBQUM7U0FDSCxDQUFDO1FBRUYsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELDhCQUFJOzs7O0lBQUosVUFBSyxPQUFVOztZQUVQLElBQUksR0FBb0I7WUFDNUIsT0FBTyxFQUFFLE9BQU87WUFDaEIsRUFBRSxFQUFFLEVBQUU7WUFDTixNQUFNLEVBQUUsRUFBRTtZQUNWLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLElBQUksRUFBRSxFQUFFO1lBQ1IsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO1NBQ2Q7UUFFRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFtQixJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEYsQ0FBQzs7Ozs7SUFFRCw2QkFBRzs7OztJQUFILFVBQUksT0FBd0I7UUFDMUIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBbUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pELENBQUM7O2dCQWhDRixVQUFVOzs7O2dEQUtJLFFBQVE7Z0JBWGYsVUFBVTs7SUF1Q2xCLHNCQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7U0FoQ1ksZUFBZTs7Ozs7O0lBQzFCLHNDQUE4Qzs7Ozs7SUFDOUMsOEJBQW9COzs7OztJQUU0QixxQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIE9wdGlvbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cENsaWVudCwgSHR0cEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1NlcnZpY2VzQ29uZmlnfSBmcm9tICcuLi9zZXJ2aWNlcy5jb25maWcuaW50ZXJmYWNlJztcbmltcG9ydCB7TWVyY3VyaW9Cb2R5LCBNZXJjdXJpb1JlcXVlc3QsIE1lcmN1cmlvUmVzcG9uc2V9IGZyb20gJ2NpYmVsZXMvbW9kZWxzJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWVyY3VyaW9TZXJ2aWNlPFQ+IHtcbiAgcHJpdmF0ZSBodHRwT3B0aW9uczogeyBoZWFkZXJzOiBIdHRwSGVhZGVycyB9O1xuICBwcml2YXRlIHVybDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIGNvbmZpZzogU2VydmljZXNDb25maWcsIHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCkge1xuXG4gICAgdGhpcy5odHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgfSlcbiAgICB9O1xuXG4gICAgdGhpcy51cmwgPSBjb25maWcuc2VydmVycy5tZXJjdXJpbztcbiAgfVxuXG4gIHBvc3QocmVxdWVzdDogVCk6IE9ic2VydmFibGU8TWVyY3VyaW9SZXNwb25zZT4ge1xuXG4gICAgY29uc3QgYm9keTogTWVyY3VyaW9Cb2R5PFQ+ID0ge1xuICAgICAgRW50cmFkYTogcmVxdWVzdCxcbiAgICAgIElkOiAnJyxcbiAgICAgIE1ldG9kbzogJycsXG4gICAgICBTZXJ2aWNpbzogJ3NlcnZpY2lvcycsXG4gICAgICBUaXBvOiAnJyxcbiAgICAgIFVSTDogdGhpcy51cmxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wb3N0PE1lcmN1cmlvUmVzcG9uc2U+KHRoaXMudXJsLCBib2R5LCB0aGlzLmh0dHBPcHRpb25zKTtcbiAgfVxuXG4gIGdldChyZXF1ZXN0OiBNZXJjdXJpb1JlcXVlc3QpOiBPYnNlcnZhYmxlPE1lcmN1cmlvUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldDxNZXJjdXJpb1Jlc3BvbnNlPih0aGlzLnVybCk7XG4gIH1cbn1cbiJdfQ==