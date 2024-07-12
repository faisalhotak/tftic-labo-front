import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CompanyAdvertiser } from '../models/company-advertiser';

@Injectable()
export class CompanyAdvertiserService {
  private readonly http = inject(HttpClient);

  getCompanyAdvertiserByJobAdvertiserId(id: string): Observable<CompanyAdvertiser[]> {
    return this.http.get<CompanyAdvertiser[]>(`/company-advertiser/${id}`);
  }
}
