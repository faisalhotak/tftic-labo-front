import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { ApplicationsComponent } from './pages/applications/applications.component';
import { ApplicationDetailsComponent } from './pages/application-details/application-details.component';
import { ListComponent } from './components/list/list.component';
import { ApplicationsService } from './services/applications';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TranslateModule } from '@ngx-translate/core';
import { CardComponent } from './components/card/card.component';
import { CardModule } from 'primeng/card';
import { JobsModule } from '../jobs/jobs.module';
import { SharedModule } from '../../shared/shared.module';

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
  ],
  providers: [ApplicationsService],
})
export class ApplicationsModule {}
