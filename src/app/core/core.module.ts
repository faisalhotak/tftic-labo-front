import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CoreComponent],
  imports: [CommonModule, CoreRoutingModule, ToastModule, FormsModule],
})
export class CoreModule {}
