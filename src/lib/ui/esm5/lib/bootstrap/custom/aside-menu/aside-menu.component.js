/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
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
export { AsideMenuComponent };
if (false) {
    /** @type {?} */
    AsideMenuComponent.prototype.data;
    /** @type {?} */
    AsideMenuComponent.prototype.open;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNpZGUtbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly91aS8iLCJzb3VyY2VzIjpbImxpYi9ib290c3RyYXAvY3VzdG9tL2FzaWRlLW1lbnUvYXNpZGUtbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUF3QixNQUFNLGVBQWUsQ0FBQztBQUd2RTtJQVVFO1FBRk8sU0FBSSxHQUFHLEtBQUssQ0FBQztJQUVMLENBQUM7Ozs7SUFFVCxzQ0FBUzs7O0lBQWhCO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDekIsQ0FBQzs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLGlvREFBMEM7O2lCQUUzQzs7Ozs7dUJBR0UsS0FBSzs7SUFRUix5QkFBQztDQUFBLEFBZkQsSUFlQztTQVZZLGtCQUFrQjs7O0lBRTdCLGtDQUE4Qjs7SUFDOUIsa0NBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgSUFzaWRlTWVudURhdGEgZnJvbSBcIi4vbW9kZWxzL0lBc2lkZU1lbnVEYXRhXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJhcHAtYXNpZGUtbWVudVwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vYXNpZGUtbWVudS5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9hc2lkZS1tZW51LmNvbXBvbmVudC5zYXNzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBc2lkZU1lbnVDb21wb25lbnQge1xyXG4gIFxyXG4gIEBJbnB1dCgpIGRhdGE6IElBc2lkZU1lbnVEYXRhO1xyXG4gIHB1YmxpYyBvcGVuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgcHVibGljIG9wZW5DbG9zZSgpIHtcclxuICAgIHRoaXMub3BlbiA9ICF0aGlzLm9wZW47XHJcbiAgfVxyXG59XHJcbiJdfQ==