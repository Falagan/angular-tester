/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
            password: ['', [Validators.required, Validators.minLength(5)]],
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
                    template: "<div main-home-container class=\"container-fluid\">\n  <div class=\"d-flex flex-row flex-wrap align-items-center vh-100\">\n    <div logo-container class=\"p-0 w-50\">\n      <div class=\"d-flex flex-row justify-content-center align-items-center\">\n        <div class=\"p-0\">\n          <img class=\"img-fluid logo-img\" src=\"assets/angular.png\" />\n        </div>\n        <div class=\"p-0\">\n          <h1 class=\"logo-text text-monospace text-center\">\n            {{ data.title }}\n          </h1>\n        </div>\n      </div>\n    </div>\n    <div login-container class=\"p-0 w-50\">\n      <div class=\"w-50 text-center m-auto\">\n        <form\n          [formGroup]=\"loginForm\"\n          (submit)=\"\n            loginForm.valid ? navigateTo.next(true) : navigateTo.next(false)\n          \"\n          autocomplete=\"off\"\n        >\n          <div class=\"form-group\">\n            <div class=\"input-group flex-nowrap\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text p-0\">\n                  <fa-icon [icon]=\"['fa', data.faIcons.user]\"></fa-icon>\n                </span>\n              </div>\n              <input\n                input-login\n                type=\"email\"\n                class=\"form-control\"\n                formControlName=\"user\"\n              />\n              <span\n                class=\"input-group-text p-0 check\"\n                *ngIf=\"!lf.user.errors && (lf.user.touched || lf.user.dirty)\"\n              >\n                <fa-icon icon=\"check\"></fa-icon>\n              </span>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"input-group flex-nowrap\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text p-0\">\n                  <fa-icon [icon]=\"['fa', data.faIcons.password]\"></fa-icon>\n                </span>\n              </div>\n              <input\n                input-login\n                type=\"email\"\n                class=\"form-control\"\n                formControlName=\"password\"\n              />\n              <span check class=\"input-group-text p-0\">\n                <fa-icon icon=\"check\"></fa-icon>\n              </span>\n            </div>\n          </div>\n          <button type=\"submit\" class=\"button\">Entrar</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n",
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
export { HomeLoginComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1sb2dpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly91aS8iLCJzb3VyY2VzIjpbImxpYi9ib290c3RyYXAvY3VzdG9tL2hvbWUtbG9naW4vaG9tZS1sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFhLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdwRTtJQVdFLDRCQUNVLFlBQXlCO1FBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBSnpCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBTTFDLENBQUM7Ozs7SUFFRCxxQ0FBUTs7O0lBQVI7UUFFRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQ3ZDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFELFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlELFFBQVEsRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1NBQ3BELENBQUMsQ0FBQztJQUVMLENBQUM7SUFHRCxzQkFBVyxrQ0FBRTtRQURiLHdCQUF3Qjs7Ozs7UUFDeEI7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO1FBQ2pDLENBQUM7OztPQUFBOztnQkE3QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLG02RUFBMEM7O2lCQUUzQzs7OztnQkFQbUIsV0FBVzs7O3VCQVU1QixLQUFLOzZCQUNMLE1BQU07O0lBd0JULHlCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7U0EzQlksa0JBQWtCOzs7SUFFN0Isa0NBQThCOztJQUM5Qix3Q0FBMEM7O0lBQzFDLHVDQUE0Qjs7Ozs7SUFHMUIsMENBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCBJSG9tZUxvZ2luRGF0YSBmcm9tIFwiLi9tb2RlbHMvSUhvbWVMb2dpbkRhdGFcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWhvbWUtbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vaG9tZS1sb2dpbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hvbWUtbG9naW4uY29tcG9uZW50LnNhc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGRhdGE6IElIb21lTG9naW5EYXRhO1xuICBAT3V0cHV0KCkgbmF2aWdhdGVUbyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHVibGljIGxvZ2luRm9ybTogRm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlclxuICAgICkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICBcbiAgICB0aGlzLmxvZ2luRm9ybSA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIHVzZXI6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDUpXV0sXG4gICAgICBwYXNzd29yZDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNSldXSxcbiAgICAgIGFjY2Vzc09uOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKVxuICAgIH0pO1xuXG4gIH1cblxuICAvKipIYW5kbGUgZm9ybSBpbiB2aWV3Ki9cbiAgcHVibGljIGdldCBsZigpIHtcbiAgICByZXR1cm4gdGhpcy5sb2dpbkZvcm0uY29udHJvbHM7XG4gIH1cblxuXG59XG4iXX0=