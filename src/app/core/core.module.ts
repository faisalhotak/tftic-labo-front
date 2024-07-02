import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './layouts/header/header.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    CoreComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ToastModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    InputIconModule,
    IconFieldModule,
    TranslateModule
  ],
})
export class CoreModule {}
