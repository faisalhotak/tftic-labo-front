import { Job, JobSeeker } from '../../jobs/models/job';
import { BaseEntity } from '../../../shared/models/base-entity';

export type ApplicationStatus =
  | 'SUBMITTED'
  | 'CANCELLED'
  | 'UNDER_REVIEW'
  | 'REJECTED'
  | 'ACCEPTED';

export interface Application extends BaseEntity {
  applyDate: Date;
  applicationStatus: ApplicationStatus;
  jobOffer: Job;
  jobSeeker: JobSeeker;
}

export interface PagedApplications {
  applications: Application[];
  elementsPerPage: number;
  totalElements: number;
  totalPages: number;
}
