import { ResolveFn } from '@angular/router';
import { Job } from '../models/job';
import { inject } from '@angular/core';
import { JobService } from '../service/job.service';

export const jobResolver: ResolveFn<Job> = (route, _) => {
  const jobsService = inject(JobService);

  const id = route.params['id'];

  return jobsService.getJobById(id);
};
