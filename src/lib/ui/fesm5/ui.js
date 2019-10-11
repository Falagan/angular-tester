import { Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TestComponent = /** @class */ (function () {
    function TestComponent() {
    }
    /**
     * @return {?}
     */
    TestComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    TestComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-test',
                    template: "<p class=\"title\">\r\n  Test component works!\r\n</p>\r\n",
                    styles: [".title{color:red}"]
                }] }
    ];
    /** @nocollapse */
    TestComponent.ctorParameters = function () { return []; };
    return TestComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TestModule = /** @class */ (function () {
    function TestModule() {
    }
    TestModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [TestComponent],
                    imports: [],
                    exports: [TestComponent]
                },] }
    ];
    return TestModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { TestComponent, TestModule };
//# sourceMappingURL=ui.js.map
