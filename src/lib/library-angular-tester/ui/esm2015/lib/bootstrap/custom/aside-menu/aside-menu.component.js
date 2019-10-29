/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from "@angular/core";
export class AsideMenuComponent {
    constructor() {
        this.open = false;
    }
    /**
     * @return {?}
     */
    openClose() {
        this.open = !this.open;
    }
}
AsideMenuComponent.decorators = [
    { type: Component, args: [{
                selector: "app-aside-menu",
                template: "<!-- Aside Menu -->\r\n<ng-container \r\n  *ngTemplateOutlet=\"open ? menuOpen: menuClose\">\r\n</ng-container>\r\n<!-- Menu Replegado -->\r\n<ng-template #menuClose>\r\n  <aside class=\"aside-menu h-100 shadow\">\r\n    <ul class=\"nav flex-column closed-menu text-center h-100\">\r\n      <li class=\"nav-item mb-3\">\r\n        <span (click)=\"openClose()\" class=\"has-pointer nav-item\">\r\n          <fa-icon [icon]=\"['fa', 'bars']\" size=\"1x\"></fa-icon>\r\n        </span>\r\n      </li>\r\n      <ng-container *ngFor=\"let item of data.routes\">\r\n        <li class=\"nav-item\" [routerLink]=\"[item.route]\">\r\n          <fa-icon [icon]=\"['fa', item.faIcon]\"></fa-icon>\r\n        </li>\r\n      </ng-container>\r\n    </ul>\r\n  </aside>\r\n</ng-template>\r\n<!--Menu Desplegado-->\r\n<ng-template #menuOpen>\r\n  <aside class=\"aside-menu shadow\">\r\n    <ul class=\"nav flex-column opened-menu p-2 text-white\">\r\n      <li class=\"nav-item\">\r\n        <span (click)=\"openClose()\" class=\"has-pointer\">\r\n          <fa-icon\r\n            [icon]=\"['fa', 'arrow-left']\"\r\n            size=\"1x\"\r\n            pull=\"right\"\r\n          ></fa-icon>\r\n        </span>\r\n      </li>\r\n      <ng-container *ngFor=\"let item of data.routes\">\r\n           <li [routerLink]=\"[item.route]\" class=\"nav-item\">\r\n        <p class=\"m-0\">\r\n          <fa-icon\r\n            [icon]=\"['fa', item.faIcon]\"\r\n            size=\"1x\"\r\n            class=\"pr-2\"\r\n          ></fa-icon\r\n          >{{ item.text }}\r\n        </p>\r\n      </li>\r\n      </ng-container>\r\n    </ul>\r\n  </aside>\r\n</ng-template>\r\n",
                styles: [".aside-menu{background-color:#cd6155;height:100%;width:auto;position:fixed;z-index:1;left:0;overflow-x:hidden}.closed-menu{width:35px}.opened-menu{width:150px}ul>li{padding:5px}ul>li>p:hover{color:#fff;cursor:pointer}hr{color:#000;background-color:#000;border:1px solid #000;width:40%;margin-top:18px;margin-left:auto;margin-right:auto}p{font-size:12px}"]
            }] }
];
/** @nocollapse */
AsideMenuComponent.ctorParameters = () => [];
AsideMenuComponent.propDecorators = {
    data: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AsideMenuComponent.prototype.data;
    /** @type {?} */
    AsideMenuComponent.prototype.open;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNpZGUtbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly91aS8iLCJzb3VyY2VzIjpbImxpYi9ib290c3RyYXAvY3VzdG9tL2FzaWRlLW1lbnUvYXNpZGUtbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUF3QixNQUFNLGVBQWUsQ0FBQztBQVF2RSxNQUFNLE9BQU8sa0JBQWtCO0lBSzdCO1FBRk8sU0FBSSxHQUFHLEtBQUssQ0FBQztJQUVMLENBQUM7Ozs7SUFFVCxTQUFTO1FBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDekIsQ0FBQzs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLGlvREFBMEM7O2FBRTNDOzs7OzttQkFHRSxLQUFLOzs7O0lBQU4sa0NBQThCOztJQUM5QixrQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCBJQXNpZGVNZW51RGF0YSBmcm9tIFwiLi9tb2RlbHMvSUFzaWRlTWVudURhdGFcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImFwcC1hc2lkZS1tZW51XCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9hc2lkZS1tZW51LmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2FzaWRlLW1lbnUuY29tcG9uZW50LnNhc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFzaWRlTWVudUNvbXBvbmVudCB7XHJcbiAgXHJcbiAgQElucHV0KCkgZGF0YTogSUFzaWRlTWVudURhdGE7XHJcbiAgcHVibGljIG9wZW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBwdWJsaWMgb3BlbkNsb3NlKCkge1xyXG4gICAgdGhpcy5vcGVuID0gIXRoaXMub3BlbjtcclxuICB9XHJcbn1cclxuIl19