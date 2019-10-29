/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MercurioService } from './mercurio.service';
import { Subject } from 'rxjs';
export class LoginService {
    /**
     * @param {?} mercurioService
     */
    constructor(mercurioService) {
        this.mercurioService = mercurioService;
        this.loginSubject = new Subject();
    }
    /**
     * @param {?} request
     * @return {?}
     */
    request(request) {
        this.mercurioService.post(request).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => this.loginSubject.next((/** @type {?} */ (response.Salida)))));
    }
    /**
     * @return {?}
     */
    get() {
        return this.loginSubject.asObservable();
    }
}
LoginService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LoginService.ctorParameters = () => [
    { type: MercurioService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlcnZpY2VzLyIsInNvdXJjZXMiOlsibGliL21lcmN1cmlvL2xvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBYSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFLekMsTUFBTSxPQUFPLFlBQVk7Ozs7SUFJdkIsWUFBb0IsZUFBOEM7UUFBOUMsb0JBQWUsR0FBZixlQUFlLENBQStCO1FBQ2hFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztJQUN6QyxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxPQUFxQjtRQUMzQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTOzs7O1FBQzFDLENBQUMsUUFBMEIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsbUJBQUEsUUFBUSxDQUFDLE1BQU0sRUFBaUIsQ0FBQyxFQUN6RixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELEdBQUc7UUFDRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUMsQ0FBQzs7O1lBakJGLFVBQVU7Ozs7WUFMSCxlQUFlOzs7Ozs7O0lBUXJCLG9DQUFtQzs7Ozs7SUFFdkIsdUNBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWVyY3VyaW9TZXJ2aWNlfSBmcm9tICcuL21lcmN1cmlvLnNlcnZpY2UnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7TWVyY3VyaW9SZXNwb25zZSwgTG9naW5SZXNwb25zZSwgTG9naW5SZXF1ZXN0fSBmcm9tICdjaWJlbGVzL21vZGVscyc7XG5pbXBvcnQge1NlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2UuaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvZ2luU2VydmljZSBpbXBsZW1lbnRzIFNlcnZpY2Uge1xuXG4gIHByaXZhdGUgbG9naW5TdWJqZWN0OiBTdWJqZWN0PGFueT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtZXJjdXJpb1NlcnZpY2U6IE1lcmN1cmlvU2VydmljZTxMb2dpblJlcXVlc3Q+KSB7XG4gICAgdGhpcy5sb2dpblN1YmplY3QgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIH1cblxuICByZXF1ZXN0KHJlcXVlc3Q6IExvZ2luUmVxdWVzdCkge1xuICAgIHRoaXMubWVyY3VyaW9TZXJ2aWNlLnBvc3QocmVxdWVzdCkuc3Vic2NyaWJlKFxuICAgICAgKHJlc3BvbnNlOiBNZXJjdXJpb1Jlc3BvbnNlKSA9PiB0aGlzLmxvZ2luU3ViamVjdC5uZXh0KHJlc3BvbnNlLlNhbGlkYSBhcyBMb2dpblJlc3BvbnNlKVxuICAgICk7XG4gIH1cblxuICBnZXQoKTogT2JzZXJ2YWJsZTxMb2dpblJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMubG9naW5TdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG59XG4iXX0=