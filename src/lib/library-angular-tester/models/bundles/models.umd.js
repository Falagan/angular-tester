(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define('models', ['exports'], factory) :
    (global = global || self, factory(global.models = {}));
}(this, function (exports) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var User = /** @class */ (function () {
        function User(id, alias) {
            this._id = id;
            this._alias = alias;
        }
        Object.defineProperty(User.prototype, "id", {
            get: /**
             * @return {?}
             */
            function () {
                return this._id;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._id = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(User.prototype, "alias", {
            get: /**
             * @return {?}
             */
            function () {
                return this._alias;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._alias = value;
            },
            enumerable: true,
            configurable: true
        });
        return User;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        User.prototype._id;
        /**
         * @type {?}
         * @private
         */
        User.prototype._alias;
    }

    exports.User = User;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=models.umd.js.map
