import { Component, Input, OnInit } from '@angular/core';
import { Company } from '../../../../shared/models/company';
import { CompanyAdvertiser } from '../../../../shared/models/company-advertiser';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrl: './company-card.component.scss'
})
export class CompanyCardComponent {
  @Input() companyAdvertiser!: CompanyAdvertiser;

}
