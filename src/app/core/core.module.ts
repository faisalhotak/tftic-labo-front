import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './layouts/header/header.component';
import { NavComponent } from './layouts/nav/nav.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

@NgModule({
  declarations: [
    CoreComponent,
    HeaderComponent,
    NavComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ToastModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    InputIconModule,
    IconFieldModule
  ],
})
export class CoreModule {}
