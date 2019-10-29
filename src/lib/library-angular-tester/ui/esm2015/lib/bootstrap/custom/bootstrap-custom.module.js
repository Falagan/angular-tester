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
export class BootstrapCustomModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLWN1c3RvbS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly91aS8iLCJzb3VyY2VzIjpbImxpYi9ib290c3RyYXAvY3VzdG9tL2Jvb3RzdHJhcC1jdXN0b20ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQzFELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQWNqQixNQUFNLE9BQU8scUJBQXFCOzs7WUFYakMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFFLGtCQUFrQixDQUFDO2dCQUN0RCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixpQkFBaUI7b0JBQ2pCLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxtQkFBbUI7aUJBQ3BCO2dCQUNELE9BQU8sRUFBQyxDQUFDLGtCQUFrQixFQUFFLGtCQUFrQixDQUFDO2FBQ2pEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQXNpZGVNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9hc2lkZS1tZW51L2FzaWRlLW1lbnUuY29tcG9uZW50JztcclxuaW1wb3J0IHtGb250QXdlc29tZU1vZHVsZX0gZnJvbSAnQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge2xpYnJhcnl9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XHJcbmltcG9ydCB7ZmFzfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBIb21lTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2hvbWUtbG9naW4vaG9tZS1sb2dpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxubGlicmFyeS5hZGQoZmFzKTtcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0FzaWRlTWVudUNvbXBvbmVudCwgSG9tZUxvZ2luQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb250QXdlc29tZU1vZHVsZSxcclxuICAgIFJvdXRlck1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czpbQXNpZGVNZW51Q29tcG9uZW50LCBIb21lTG9naW5Db21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCb290c3RyYXBDdXN0b21Nb2R1bGUgeyB9XHJcbiJdfQ==