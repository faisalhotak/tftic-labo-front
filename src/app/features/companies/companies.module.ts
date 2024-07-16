import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCompaniesComponent } from './pages/my-companies/my-companies.component';
import { CompaniesRoutingModule } from './companies-routing.module';



@NgModule({
  declarations: [
    MyCompaniesComponent
  ],
  imports: [
    CommonModule,
    CompaniesRoutingModule
  ]
})
export class CompaniesModule { }
