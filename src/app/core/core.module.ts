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
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from '../features/home/home.component';
import { JobService } from '../features/jobs/service/job.service';
import { CarouselComponent } from '../shared/components/carousel/carousel.component';
import { SearchBarComponent } from '../shared/components/search-bar/search-bar.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    CoreComponent,
    HeaderComponent,
    HomeComponent,
    CarouselComponent,
    SearchBarComponent,
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
    TranslateModule,
    SharedModule,
    AutoCompleteModule,
    CarouselModule,
    CardModule,
  ],
  providers: [JobService],
})
export class CoreModule {}
