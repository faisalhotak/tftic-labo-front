import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from './pages/login/login.component';
import { TranslateModule } from '@ngx-translate/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { Button, ButtonDirective } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { RegisterComponent } from './pages/register/register.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    TranslateModule,
    FloatLabelModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonDirective,
    PasswordModule,
    Button,
    SelectButtonModule,
    CalendarModule,
    RadioButtonModule,
  ],
  providers: [CookieService],
})
export class AuthModule {}
