import { Injectable, ɵɵdefineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TestService {
    constructor() { }
    /**
     * @return {?}
     */
    testService() {
        console.log('Testing Service Test.');
    }
}
TestService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TestService.ctorParameters = () => [];
/** @nocollapse */ TestService.ngInjectableDef = ɵɵdefineInjectable({ factory: function TestService_Factory() { return new TestService(); }, token: TestService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TestAService extends TestService {
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    testService() {
        console.log('Testing Service Test version A.');
    }
}
TestAService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TestAService.ctorParameters = () => [];
/** @nocollapse */ TestAService.ngInjectableDef = ɵɵdefineInjectable({ factory: function TestAService_Factory() { return new TestAService(); }, token: TestAService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TestBService extends TestService {
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    testService() {
        console.log('Testing Service Test version B.');
    }
}
TestBService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TestBService.ctorParameters = () => [];
/** @nocollapse */ TestBService.ngInjectableDef = ɵɵdefineInjectable({ factory: function TestBService_Factory() { return new TestBService(); }, token: TestBService, providedIn: "root" });

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
