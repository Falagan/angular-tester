(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define('models', ['exports'], factory) :
    (global = global || self, factory(global.models = {}));
}(this, function (exports) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function IHotel() { }
    if (false) {
        /** @type {?} */
        IHotel.prototype.name;
        /** @type {?} */
        IHotel.prototype.id;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HotelKeytel = /** @class */ (function () {
        function HotelKeytel() {
            this.name = 'nombre test';
            this.id = 300;
        }
        return HotelKeytel;
    }());
    if (false) {
        /** @type {?} */
        HotelKeytel.prototype.name;
        /** @type {?} */
        HotelKeytel.prototype.id;
    }

    exports.HotelKeytel = HotelKeytel;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=models.umd.js.map
