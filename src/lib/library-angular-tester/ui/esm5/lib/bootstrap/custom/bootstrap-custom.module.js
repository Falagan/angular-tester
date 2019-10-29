/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideMenuComponent } from './aside-menu/aside-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { HomeLoginComponent } from './home-login/home-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
library.add(fas);
var BootstrapCustomModule = /** @class */ (function () {
    function BootstrapCustomModule() {
    }
    BootstrapCustomModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [AsideMenuComponent, HomeLoginComponent],
                    imports: [
                        CommonModule,
                        FontAwesomeModule,
                        RouterModule,
                        FormsModule,
                        ReactiveFormsModule
                    ],
                    exports: [AsideMenuComponent, HomeLoginComponent]
                },] }
    ];
    return BootstrapCustomModule;
}());
export { BootstrapCustomModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLWN1c3RvbS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly91aS8iLCJzb3VyY2VzIjpbImxpYi9ib290c3RyYXAvY3VzdG9tL2Jvb3RzdHJhcC1jdXN0b20ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQzFELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUdqQjtJQUFBO0lBV3FDLENBQUM7O2dCQVhyQyxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsa0JBQWtCLENBQUM7b0JBQ3RELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGlCQUFpQjt3QkFDakIsWUFBWTt3QkFDWixXQUFXO3dCQUNYLG1CQUFtQjtxQkFDcEI7b0JBQ0QsT0FBTyxFQUFDLENBQUMsa0JBQWtCLEVBQUUsa0JBQWtCLENBQUM7aUJBQ2pEOztJQUNvQyw0QkFBQztDQUFBLEFBWHRDLElBV3NDO1NBQXpCLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEFzaWRlTWVudUNvbXBvbmVudCB9IGZyb20gJy4vYXNpZGUtbWVudS9hc2lkZS1tZW51LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Rm9udEF3ZXNvbWVNb2R1bGV9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtsaWJyYXJ5fSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xyXG5pbXBvcnQge2Zhc30gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgSG9tZUxvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lLWxvZ2luL2hvbWUtbG9naW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmxpYnJhcnkuYWRkKGZhcyk7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtBc2lkZU1lbnVDb21wb25lbnQsIEhvbWVMb2dpbkNvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9udEF3ZXNvbWVNb2R1bGUsXHJcbiAgICBSb3V0ZXJNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6W0FzaWRlTWVudUNvbXBvbmVudCwgSG9tZUxvZ2luQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQm9vdHN0cmFwQ3VzdG9tTW9kdWxlIHsgfVxyXG4iXX0=