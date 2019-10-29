(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ui', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global.ui = {}, global.ng.core));
}(this, function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UiModule = /** @class */ (function () {
        function UiModule() {
        }
        UiModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [],
                        imports: [],
                        exports: []
                    },] }
        ];
        return UiModule;
    }());

    exports.UiModule = UiModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ui.umd.js.map
