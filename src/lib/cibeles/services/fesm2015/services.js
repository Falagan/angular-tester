import { Injectable, Optional, NgModule } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class MercurioService {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoginService {
    /**
     * @param {?} mercurioService
     */
    constructor(mercurioService) {
        this.mercurioService = mercurioService;
        this.loginSubject = new Subject();
    }
    /**
     * @param {?} request
     * @return {?}
     */
    request(request) {
        this.mercurioService.post(request).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => this.loginSubject.next((/** @type {?} */ (response.Salida)))));
    }
    /**
     * @return {?}
     */
    get() {
        return this.loginSubject.asObservable();
    }
}
LoginService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LoginService.ctorParameters = () => [
    { type: MercurioService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    LoginService.prototype.loginSubject;
    /**
     * @type {?}
     * @private
     */
    LoginService.prototype.mercurioService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ServicesModule {
}
ServicesModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [],
                exports: [],
                providers: [LoginService]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ServicesModule, LoginService as ɵa, MercurioService as ɵb };
//# sourceMappingURL=services.js.map
