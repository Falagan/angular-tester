import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaticModule } from './static/static.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { ModalsComponent } from './services/modals/modals-templates/modals.component';
import { AsideMenuComponent } from './shared/aside-menu/aside-menu.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';

library.add(fas);

@NgModule({
  declarations: [
    AppComponent,
    ModalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    StaticModule,
    CoreModule,
    SharedModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
