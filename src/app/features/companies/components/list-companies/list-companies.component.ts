import { Component, inject, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Company } from '../../../../shared/models/company';
import { CompanyAdvertiserService } from '../../../../shared/service/company-advertiser.service';
import { AuthService } from '../../../../core/services/auth.service';
import { CompanyAdvertiser } from '../../../../shared/models/company-advertiser';

@Component({
  selector: 'app-list-companies',
  templateUrl: './list-companies.component.html',
  styleUrl: './list-companies.component.scss'
})
export class ListCompaniesComponent implements OnInit {

  private readonly companyAdvertiserService = inject(CompanyAdvertiserService);
  private readonly authService = inject(AuthService);

  companyAdvertiser$!: Observable<CompanyAdvertiser[]>;

  ngOnInit(): void {
    this.companyAdvertiser$ = this.companyAdvertiserService.getByJobAdvertiserId(this.authService.userId!);
  }

}
