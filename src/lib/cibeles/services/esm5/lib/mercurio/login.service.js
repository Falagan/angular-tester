/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MercurioService } from './mercurio.service';
import { Subject } from 'rxjs';
var LoginService = /** @class */ (function () {
    function LoginService(mercurioService) {
        this.mercurioService = mercurioService;
        this.loginSubject = new Subject();
    }
    /**
     * @param {?} request
     * @return {?}
     */
    LoginService.prototype.request = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        var _this = this;
        this.mercurioService.post(request).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return _this.loginSubject.next((/** @type {?} */ (response.Salida))); }));
    };
    /**
     * @return {?}
     */
    LoginService.prototype.get = /**
     * @return {?}
     */
    function () {
        return this.loginSubject.asObservable();
    };
    LoginService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LoginService.ctorParameters = function () { return [
        { type: MercurioService }
    ]; };
    return LoginService;
}());
export { LoginService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LoginService.prototype.loginSubject;
    /**
     * @type {?}
     * @private
     */
    LoginService.prototype.mercurioService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlcnZpY2VzLyIsInNvdXJjZXMiOlsibGliL21lcmN1cmlvL2xvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBYSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFJekM7SUFLRSxzQkFBb0IsZUFBOEM7UUFBOUMsb0JBQWUsR0FBZixlQUFlLENBQStCO1FBQ2hFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztJQUN6QyxDQUFDOzs7OztJQUVELDhCQUFPOzs7O0lBQVAsVUFBUSxPQUFxQjtRQUE3QixpQkFJQztRQUhDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVM7Ozs7UUFDMUMsVUFBQyxRQUEwQixJQUFLLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsbUJBQUEsUUFBUSxDQUFDLE1BQU0sRUFBaUIsQ0FBQyxFQUF4RCxDQUF3RCxFQUN6RixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELDBCQUFHOzs7SUFBSDtRQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQyxDQUFDOztnQkFqQkYsVUFBVTs7OztnQkFMSCxlQUFlOztJQXVCdkIsbUJBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWpCWSxZQUFZOzs7Ozs7SUFFdkIsb0NBQW1DOzs7OztJQUV2Qix1Q0FBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNZXJjdXJpb1NlcnZpY2V9IGZyb20gJy4vbWVyY3VyaW8uc2VydmljZSc7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YmplY3R9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtNZXJjdXJpb1Jlc3BvbnNlLCBMb2dpblJlc3BvbnNlLCBMb2dpblJlcXVlc3R9IGZyb20gJ2NpYmVsZXMvbW9kZWxzJztcbmltcG9ydCB7U2VydmljZX0gZnJvbSAnLi4vc2VydmljZS5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9naW5TZXJ2aWNlIGltcGxlbWVudHMgU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBsb2dpblN1YmplY3Q6IFN1YmplY3Q8YW55PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1lcmN1cmlvU2VydmljZTogTWVyY3VyaW9TZXJ2aWNlPExvZ2luUmVxdWVzdD4pIHtcbiAgICB0aGlzLmxvZ2luU3ViamVjdCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgfVxuXG4gIHJlcXVlc3QocmVxdWVzdDogTG9naW5SZXF1ZXN0KSB7XG4gICAgdGhpcy5tZXJjdXJpb1NlcnZpY2UucG9zdChyZXF1ZXN0KS5zdWJzY3JpYmUoXG4gICAgICAocmVzcG9uc2U6IE1lcmN1cmlvUmVzcG9uc2UpID0+IHRoaXMubG9naW5TdWJqZWN0Lm5leHQocmVzcG9uc2UuU2FsaWRhIGFzIExvZ2luUmVzcG9uc2UpXG4gICAgKTtcbiAgfVxuXG4gIGdldCgpOiBPYnNlcnZhYmxlPExvZ2luUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy5sb2dpblN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIH1cbn1cbiJdfQ==