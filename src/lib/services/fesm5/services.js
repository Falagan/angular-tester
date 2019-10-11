import { Injectable, ɵɵdefineInjectable } from '@angular/core';
import { __extends } from 'tslib';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TestService = /** @class */ (function () {
    function TestService() {
    }
    /**
     * @return {?}
     */
    TestService.prototype.testService = /**
     * @return {?}
     */
    function () {
        console.log('Testing Service Test.');
    };
    TestService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TestService.ctorParameters = function () { return []; };
    /** @nocollapse */ TestService.ngInjectableDef = ɵɵdefineInjectable({ factory: function TestService_Factory() { return new TestService(); }, token: TestService, providedIn: "root" });
    return TestService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TestAService = /** @class */ (function (_super) {
    __extends(TestAService, _super);
    function TestAService() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    TestAService.prototype.testService = /**
     * @return {?}
     */
    function () {
        console.log('Testing Service Test version A.');
    };
    TestAService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TestAService.ctorParameters = function () { return []; };
    /** @nocollapse */ TestAService.ngInjectableDef = ɵɵdefineInjectable({ factory: function TestAService_Factory() { return new TestAService(); }, token: TestAService, providedIn: "root" });
    return TestAService;
}(TestService));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TestBService = /** @class */ (function (_super) {
    __extends(TestBService, _super);
    function TestBService() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    TestBService.prototype.testService = /**
     * @return {?}
     */
    function () {
        console.log('Testing Service Test version B.');
    };
    TestBService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TestBService.ctorParameters = function () { return []; };
    /** @nocollapse */ TestBService.ngInjectableDef = ɵɵdefineInjectable({ factory: function TestBService_Factory() { return new TestBService(); }, token: TestBService, providedIn: "root" });
    return TestBService;
}(TestService));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { TestAService, TestBService, TestService };
//# sourceMappingURL=services.js.map
