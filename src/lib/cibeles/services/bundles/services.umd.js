(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('services', ['exports', '@angular/core', '@angular/common/http', 'rxjs'], factory) :
    (global = global || self, factory(global.services = {}, global.ng.core, global.ng.common.http, global.rxjs));
}(this, function (exports, core, http, rxjs) { 'use strict';

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
                headers: new http.HttpHeaders({
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        MercurioService.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Optional }] },
            { type: http.HttpClient }
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
            this.loginSubject = new rxjs.Subject();
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
            { type: core.Injectable }
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
            { type: core.NgModule, args: [{
                        declarations: [],
                        imports: [],
                        exports: [],
                        providers: [LoginService]
                    },] }
        ];
        return ServicesModule;
    }());

    exports.ServicesModule = ServicesModule;
    exports.ɵa = LoginService;
    exports.ɵb = MercurioService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=services.umd.js.map
