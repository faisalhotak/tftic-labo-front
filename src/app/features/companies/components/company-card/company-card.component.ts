import { Component, Input } from '@angular/core';
import { CompanyAdvertiser } from '../../../../shared/models/company-advertiser';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrl: './company-card.component.scss',
})
export class CompanyCardComponent {
  @Input() companyAdvertiser!: CompanyAdvertiser;
}
