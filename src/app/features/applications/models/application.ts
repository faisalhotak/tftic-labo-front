import { Job, JobSeeker } from '../../jobs/models/job';
import { BaseEntity } from '../../../shared/models/base-entity';

export type ApplicationStatus =
  | 'SUBMITTED'
  | 'UNDER_REVIEW'
  | 'ACCEPTED'
  | 'CANCELLED'
  | 'REJECTED';

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
