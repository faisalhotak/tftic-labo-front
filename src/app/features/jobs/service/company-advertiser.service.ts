import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CompanyAdvertiser } from '../models/company-advertiser';
import { API_ENDPOINTS } from '../../../core/constants/api-endpoints';

@Injectable()
export class CompanyAdvertiserService {
  private readonly http = inject(HttpClient);

  getByJobAdvertiserId(id: number): Observable<CompanyAdvertiser[]> {
    return this.http.get<CompanyAdvertiser[]>(`${API_ENDPOINTS.companyAdvertiser}/${id}`);
  }
}
