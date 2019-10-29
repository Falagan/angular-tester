/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
export class HomeLoginComponent {
    /**
     * @param {?} _formBuilder
     */
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.navigateTo = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.loginForm = this._formBuilder.group({
            user: ['', [Validators.required, Validators.minLength(5)]],
            password: ['', Validators.required],
            accessOn: new Date().toISOString().substring(0, 10)
        });
    }
    /**
     * Handle form in view
     * @return {?}
     */
    get lf() {
        return this.loginForm.controls;
    }
}
HomeLoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-home-login',
                template: "<div main-home-container class=\"container-fluid\">\r\n  <div class=\"d-flex flex-row flex-wrap align-items-center vh-100\">\r\n    <div logo-container class=\"p-0 w-50\">\r\n      <div class=\"d-flex flex-row justify-content-center align-items-center\">\r\n        <div class=\"p-0\">\r\n          <img class=\"img-fluid logo-img\" src=\"assets/angular.png\" />\r\n        </div>\r\n        <div class=\"p-0\">\r\n          <h1 class=\"logo-text text-monospace text-center\">\r\n            {{ data.title }}\r\n          </h1>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div login-container class=\"p-0 w-50\">\r\n      <div class=\"w-50 text-center m-auto\">\r\n        <form\r\n          [formGroup]=\"loginForm\"\r\n          (submit)=\"\r\n            loginForm.valid ? navigateTo.next(true) : navigateTo.next(false)\r\n          \"\r\n          autocomplete=\"off\"\r\n        >\r\n          <div class=\"form-group\">\r\n            <div class=\"input-group flex-nowrap\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text p-0\">\r\n                  <fa-icon [icon]=\"['fa', data.faIcons.user]\"></fa-icon>\r\n                </span>\r\n              </div>\r\n              <input\r\n                input-login\r\n                type=\"email\"\r\n                class=\"form-control\"\r\n                formControlName=\"user\"\r\n              />\r\n              <span\r\n                class=\"input-group-text p-0 check\"\r\n                *ngIf=\"!lf.user.errors && (lf.user.touched || lf.user.dirty)\"\r\n              >\r\n                <fa-icon icon=\"check\"></fa-icon>\r\n              </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <div class=\"input-group flex-nowrap\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text p-0\">\r\n                  <fa-icon [icon]=\"['fa', data.faIcons.password]\"></fa-icon>\r\n                </span>\r\n              </div>\r\n              <input\r\n                input-login\r\n                type=\"email\"\r\n                class=\"form-control\"\r\n                formControlName=\"password\"\r\n              />\r\n            </div>\r\n          </div>\r\n          <button type=\"submit\" class=\"button\">Entrar</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                styles: ["[login-container],[logo-container],[main-home-container]{background-color:#cd6155}[input-login]{border-left:none;border-top:none;border-right:none;background-color:#cd6155;border-bottom:1px solid #fff;border-radius:0;color:#fff;height:35px}.button{color:#fff;border-color:#fff}.button:hover{color:#000;border-color:#000}.form-control::-webkit-input-placeholder{color:#fff}.form-control::-moz-placeholder{color:#fff}.form-control::-ms-input-placeholder{color:#fff}.card-login{box-shadow:none;background-color:#363636;width:70%;margin:0 auto}.logo-text,.logo-text>span{color:#fff}.logo-img{width:96px;height:96px}[check]{margin-left:-16px;color:#fff}@media (max-width:455px){.logo-container{margin:0 auto}}"]
            }] }
];
/** @nocollapse */
HomeLoginComponent.ctorParameters = () => [
    { type: FormBuilder }
];
HomeLoginComponent.propDecorators = {
    data: [{ type: Input }],
    navigateTo: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sb2dpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly91aS8iLCJzb3VyY2VzIjpbImxpYi9ib290c3RyYXAvY3VzdG9tL2hvbWUtbG9naW4vaG9tZS1sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFhLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVFwRSxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBTTdCLFlBQ1UsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFKekIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFNMUMsQ0FBQzs7OztJQUVELFFBQVE7UUFFTixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQ3ZDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFELFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQ25DLFFBQVEsRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1NBQ3BELENBQUMsQ0FBQztJQUVMLENBQUM7Ozs7O0lBR0QsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztJQUNqQyxDQUFDOzs7WUE3QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLCs1RUFBMEM7O2FBRTNDOzs7O1lBUG1CLFdBQVc7OzttQkFVNUIsS0FBSzt5QkFDTCxNQUFNOzs7O0lBRFAsa0NBQThCOztJQUM5Qix3Q0FBMEM7O0lBQzFDLHVDQUE0Qjs7Ozs7SUFHMUIsMENBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgSUhvbWVMb2dpbkRhdGEgZnJvbSBcIi4vbW9kZWxzL0lIb21lTG9naW5EYXRhXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1ob21lLWxvZ2luJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaG9tZS1sb2dpbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaG9tZS1sb2dpbi5jb21wb25lbnQuc2FzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBkYXRhOiBJSG9tZUxvZ2luRGF0YTtcclxuICBAT3V0cHV0KCkgbmF2aWdhdGVUbyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBwdWJsaWMgbG9naW5Gb3JtOiBGb3JtR3JvdXA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyXHJcbiAgICApIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICBcclxuICAgIHRoaXMubG9naW5Gb3JtID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICB1c2VyOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg1KV1dLFxyXG4gICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgYWNjZXNzT246IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApXHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICAvKipIYW5kbGUgZm9ybSBpbiB2aWV3Ki9cclxuICBwdWJsaWMgZ2V0IGxmKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubG9naW5Gb3JtLmNvbnRyb2xzO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ==