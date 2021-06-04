import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { LeftComponent } from './home-banner/left/left.component';
import { RightComponent } from './home-banner/right/right.component';
import { LogComponent } from './log/log.component';
import { LogImageComponent } from './log/log-image/log-image.component';
import { LogTextComponent } from './log/log-text/log-text.component';
import { AboutComponent } from './about/about.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { LogsComponent } from './logs/logs.component';
import { EditEntryComponent } from './edit-entry/edit-entry.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeBannerComponent,
    LeftComponent,
    RightComponent,
    LogComponent,
    LogImageComponent,
    LogTextComponent,
    AboutComponent,
    NewEntryComponent,
    LogsComponent,
    EditEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
