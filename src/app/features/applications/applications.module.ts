import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { ApplicationsComponent } from './pages/applications/applications.component';
import { ApplicationDetailsComponent } from './pages/application-details/application-details.component';
import { ListComponent } from './components/list/list.component';
import { ApplicationsService } from './services/applications.service';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TranslateModule } from '@ngx-translate/core';
import { CardComponent } from './components/card/card.component';
import { CardModule } from 'primeng/card';
import { JobsModule } from '../jobs/jobs.module';
import { SharedModule } from '../../shared/shared.module';
import { Button } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { BadgeModule } from 'primeng/badge';
import { InplaceModule } from 'primeng/inplace';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ApplicationsComponent,
    ApplicationDetailsComponent,
    ListComponent,
    ListComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    ApplicationsRoutingModule,
    PaginatorModule,
    ProgressSpinnerModule,
    TranslateModule,
    CardModule,
    JobsModule,
    SharedModule,
    Button,
    ChipModule,
    BadgeModule,
    InplaceModule,
    InputTextModule,
    ReactiveFormsModule,
  ],
  providers: [ApplicationsService],
})
export class ApplicationsModule {}
