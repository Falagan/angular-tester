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
var LoginService = /** @class */ (function () {
    function LoginService(mercurioService) {
        this.mercurioService = mercurioService;
        this.loginSubject = new Subject();
    }
    /**
     * @param {?} request
     * @return {?}
     */
    LoginService.prototype.request = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        var _this = this;
        this.mercurioService.post(request).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return _this.loginSubject.next((/** @type {?} */ (response.Salida))); }));
    };
    /**
     * @return {?}
     */
    LoginService.prototype.get = /**
     * @return {?}
     */
    function () {
        return this.loginSubject.asObservable();
    };
    LoginService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LoginService.ctorParameters = function () { return [
        { type: MercurioService }
    ]; };
    return LoginService;
}());
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
var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [],
                    imports: [],
                    exports: [],
                    providers: [LoginService]
                },] }
    ];
    return ServicesModule;
}());

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
