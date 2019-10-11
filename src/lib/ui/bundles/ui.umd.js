(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ui', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global.ui = {}, global.ng.core));
}(this, function (exports, core) { 'use strict';

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
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
                        declarations: [TestComponent],
                        imports: [],
                        exports: [TestComponent]
                    },] }
        ];
        return TestModule;
    }());

    exports.TestComponent = TestComponent;
    exports.TestModule = TestModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ui.umd.js.map
