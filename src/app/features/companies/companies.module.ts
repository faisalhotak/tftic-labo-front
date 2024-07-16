import { NgModule } from '@angular/core';
import { CommonModule, LowerCasePipe } from '@angular/common';
import { MyCompaniesComponent } from './pages/my-companies/my-companies.component';
import { CompaniesRoutingModule } from './companies-routing.module';
import { ListCompaniesComponent } from './components/list-companies/list-companies.component';
import { TranslateModule } from '@ngx-translate/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CompanyCardComponent } from './components/company-card/company-card.component';
import { SharedModule } from '../../shared/shared.module';
import { CardModule } from 'primeng/card';




@NgModule({
  declarations: [
    MyCompaniesComponent,
    ListCompaniesComponent,
    CompanyCardComponent
  ],
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    TranslateModule,
    ProgressSpinnerModule,
    SharedModule,
    CardModule,
    LowerCasePipe,
  ]
})
export class CompaniesModule { }
