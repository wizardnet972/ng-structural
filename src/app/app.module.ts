import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { MyNgIfDirective } from './my-ng-if.directive';
import { IfRoleDirective } from './if-role.directive';

import { AuthService } from './auth.service';
import { RangeDirective } from './range.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyNgIfDirective,
    IfRoleDirective,
    RangeDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
