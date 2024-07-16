import { ResolveFn } from '@angular/router';
import { Application } from '../models/application';
import { inject } from '@angular/core';
import { ApplicationsService } from '../services/applications.service';

export const applicationResolver: ResolveFn<Application> = (route, _) => {
  const applicationService = inject(ApplicationsService);

  const id = route.params['id'];

  return applicationService.getApplicationById(id);
};
