import { Company } from "../../../shared/models/company";

export interface Job {
  id: number;
  description: string;
  annualGrossSalaryMin: number;
  annualGrossSalaryMax: number;
  createdAt: Date;
  activeDays: number;
  expiringDate: Date;
  zipCity: ZipCity;
  isActive: boolean;
  agent: Agent;
  contractType: ContractType;
  jobFunction: JobFunction;
}

export interface PagedJobOffers {
  jobOffers: Job[];
  elementsPerPage: number;
  totalElements: number;
  totalPages: number;
}

export interface ContractType {
  id: number;
  name: string;
  description: string;
}

export interface JobFunction {
  id: number;
  name: string;
}

interface JobAdvertiser {
  email: string;
  firstname: string;
  lastname: string;
  phoneNumber: string;
  contactEmail: string;
}

interface Agent {
  jobAdvertiser: JobAdvertiser;
  company: Company;
}

export interface JobApplication {
  jobOfferId: number;
}

export interface JobApplicationResponse {
  message: string;
}

export interface ZipCity {
  id: number;
  zip: string;
  city: string;
}
