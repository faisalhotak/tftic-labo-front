import { Component, effect, inject, signal } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Application } from '../../models/application';
import { ApplicationsService } from '../../services/applications.service';
import { API_ENDPOINTS } from '../../../../core/constants/api-endpoints';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrl: './applications.component.scss',
})
export class ApplicationsComponent {
  private readonly applicationService: ApplicationsService =
    inject(ApplicationsService);
  protected readonly url = API_ENDPOINTS.applications;
  protected applications$!: Observable<Application[]>;
  protected applicationsCount!: number;
  protected elementsPerPage!: number;

  protected filters = signal<Map<string, string>>(new Map());
  protected page = signal<number>(0);

  constructor() {
    effect(() => {
      const filters = this.filters();
      const pageNumber = this.page();

      this.fetch(filters, pageNumber);
    });
  }

  fetch(filters?: Map<string, string>, page: number = 0) {
    this.applications$ = this.applicationService
      .getAllApplications(filters, page)
      .pipe(
        map((pagedApplications) => {
          this.applicationsCount = pagedApplications.totalElements;
          this.elementsPerPage = pagedApplications.elementsPerPage;

          return pagedApplications.applications;
        }),
      );
  }
}
