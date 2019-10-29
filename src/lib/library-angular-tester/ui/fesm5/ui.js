import { Component, Input, EventEmitter, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AsideMenuComponent = /** @class */ (function () {
    function AsideMenuComponent() {
        this.open = false;
    }
    /**
     * @return {?}
     */
    AsideMenuComponent.prototype.openClose = /**
     * @return {?}
     */
    function () {
        this.open = !this.open;
    };
    AsideMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: "app-aside-menu",
                    template: "<!-- Aside Menu -->\r\n<ng-container \r\n  *ngTemplateOutlet=\"open ? menuOpen: menuClose\">\r\n</ng-container>\r\n<!-- Menu Replegado -->\r\n<ng-template #menuClose>\r\n  <aside class=\"aside-menu h-100 shadow\">\r\n    <ul class=\"nav flex-column closed-menu text-center h-100\">\r\n      <li class=\"nav-item mb-3\">\r\n        <span (click)=\"openClose()\" class=\"has-pointer nav-item\">\r\n          <fa-icon [icon]=\"['fa', 'bars']\" size=\"1x\"></fa-icon>\r\n        </span>\r\n      </li>\r\n      <ng-container *ngFor=\"let item of data.routes\">\r\n        <li class=\"nav-item\" [routerLink]=\"[item.route]\">\r\n          <fa-icon [icon]=\"['fa', item.faIcon]\"></fa-icon>\r\n        </li>\r\n      </ng-container>\r\n    </ul>\r\n  </aside>\r\n</ng-template>\r\n<!--Menu Desplegado-->\r\n<ng-template #menuOpen>\r\n  <aside class=\"aside-menu shadow\">\r\n    <ul class=\"nav flex-column opened-menu p-2 text-white\">\r\n      <li class=\"nav-item\">\r\n        <span (click)=\"openClose()\" class=\"has-pointer\">\r\n          <fa-icon\r\n            [icon]=\"['fa', 'arrow-left']\"\r\n            size=\"1x\"\r\n            pull=\"right\"\r\n          ></fa-icon>\r\n        </span>\r\n      </li>\r\n      <ng-container *ngFor=\"let item of data.routes\">\r\n           <li [routerLink]=\"[item.route]\" class=\"nav-item\">\r\n        <p class=\"m-0\">\r\n          <fa-icon\r\n            [icon]=\"['fa', item.faIcon]\"\r\n            size=\"1x\"\r\n            class=\"pr-2\"\r\n          ></fa-icon\r\n          >{{ item.text }}\r\n        </p>\r\n      </li>\r\n      </ng-container>\r\n    </ul>\r\n  </aside>\r\n</ng-template>\r\n",
                    styles: [".aside-menu{background-color:#cd6155;height:100%;width:auto;position:fixed;z-index:1;left:0;overflow-x:hidden}.closed-menu{width:35px}.opened-menu{width:150px}ul>li{padding:5px}ul>li>p:hover{color:#fff;cursor:pointer}hr{color:#000;background-color:#000;border:1px solid #000;width:40%;margin-top:18px;margin-left:auto;margin-right:auto}p{font-size:12px}"]
                }] }
    ];
    /** @nocollapse */
    AsideMenuComponent.ctorParameters = function () { return []; };
    AsideMenuComponent.propDecorators = {
        data: [{ type: Input }]
    };
    return AsideMenuComponent;
}());
if (false) {
    /** @type {?} */
    AsideMenuComponent.prototype.data;
    /** @type {?} */
    AsideMenuComponent.prototype.open;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HomeLoginComponent = /** @class */ (function () {
    function HomeLoginComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.navigateTo = new EventEmitter();
    }
    /**
     * @return {?}
     */
    HomeLoginComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.loginForm = this._formBuilder.group({
            user: ['', [Validators.required, Validators.minLength(5)]],
            password: ['', Validators.required],
            accessOn: new Date().toISOString().substring(0, 10)
        });
    };
    Object.defineProperty(HomeLoginComponent.prototype, "lf", {
        /**Handle form in view*/
        get: /**
         * Handle form in view
         * @return {?}
         */
        function () {
            return this.loginForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    HomeLoginComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-home-login',
                    template: "<div main-home-container class=\"container-fluid\">\r\n  <div class=\"d-flex flex-row flex-wrap align-items-center vh-100\">\r\n    <div logo-container class=\"p-0 w-50\">\r\n      <div class=\"d-flex flex-row justify-content-center align-items-center\">\r\n        <div class=\"p-0\">\r\n          <img class=\"img-fluid logo-img\" src=\"assets/angular.png\" />\r\n        </div>\r\n        <div class=\"p-0\">\r\n          <h1 class=\"logo-text text-monospace text-center\">\r\n            {{ data.title }}\r\n          </h1>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div login-container class=\"p-0 w-50\">\r\n      <div class=\"w-50 text-center m-auto\">\r\n        <form\r\n          [formGroup]=\"loginForm\"\r\n          (submit)=\"\r\n            loginForm.valid ? navigateTo.next(true) : navigateTo.next(false)\r\n          \"\r\n          autocomplete=\"off\"\r\n        >\r\n          <div class=\"form-group\">\r\n            <div class=\"input-group flex-nowrap\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text p-0\">\r\n                  <fa-icon [icon]=\"['fa', data.faIcons.user]\"></fa-icon>\r\n                </span>\r\n              </div>\r\n              <input\r\n                input-login\r\n                type=\"email\"\r\n                class=\"form-control\"\r\n                formControlName=\"user\"\r\n              />\r\n              <span\r\n                class=\"input-group-text p-0 check\"\r\n                *ngIf=\"!lf.user.errors && (lf.user.touched || lf.user.dirty)\"\r\n              >\r\n                <fa-icon icon=\"check\"></fa-icon>\r\n              </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <div class=\"input-group flex-nowrap\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text p-0\">\r\n                  <fa-icon [icon]=\"['fa', data.faIcons.password]\"></fa-icon>\r\n                </span>\r\n              </div>\r\n              <input\r\n                input-login\r\n                type=\"email\"\r\n                class=\"form-control\"\r\n                formControlName=\"password\"\r\n              />\r\n            </div>\r\n          </div>\r\n          <button type=\"submit\" class=\"button\">Entrar</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    styles: ["[login-container],[logo-container],[main-home-container]{background-color:#cd6155}[input-login]{border-left:none;border-top:none;border-right:none;background-color:#cd6155;border-bottom:1px solid #fff;border-radius:0;color:#fff;height:35px}.button{color:#fff;border-color:#fff}.button:hover{color:#000;border-color:#000}.form-control::-webkit-input-placeholder{color:#fff}.form-control::-moz-placeholder{color:#fff}.form-control::-ms-input-placeholder{color:#fff}.card-login{box-shadow:none;background-color:#363636;width:70%;margin:0 auto}.logo-text,.logo-text>span{color:#fff}.logo-img{width:96px;height:96px}[check]{margin-left:-16px;color:#fff}@media (max-width:455px){.logo-container{margin:0 auto}}"]
                }] }
    ];
    /** @nocollapse */
    HomeLoginComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    HomeLoginComponent.propDecorators = {
        data: [{ type: Input }],
        navigateTo: [{ type: Output }]
    };
    return HomeLoginComponent;
}());
if (false) {
    /** @type {?} */
    HomeLoginComponent.prototype.data;
    /** @type {?} */
    HomeLoginComponent.prototype.navigateTo;
    /** @type {?} */
    HomeLoginComponent.prototype.loginForm;
    /**
     * @type {?}
     * @private
     */
    HomeLoginComponent.prototype._formBuilder;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
library.add(fas);
var BootstrapCustomModule = /** @class */ (function () {
    function BootstrapCustomModule() {
    }
    BootstrapCustomModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [AsideMenuComponent, HomeLoginComponent],
                    imports: [
                        CommonModule,
                        FontAwesomeModule,
                        RouterModule,
                        FormsModule,
                        ReactiveFormsModule
                    ],
                    exports: [AsideMenuComponent, HomeLoginComponent]
                },] }
    ];
    return BootstrapCustomModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BootstrapCustomModule, AsideMenuComponent as ɵa, HomeLoginComponent as ɵb };
//# sourceMappingURL=ui.js.map
