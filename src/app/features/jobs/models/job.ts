export interface Job {
  id: number;
  description: string;
  annualGrossSalaryMin: number;
  annualGrossSalaryMax: number;
  createdAt: Date;
  activeDays: number;
  expiringDate: Date;
  zipCity: string;
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

interface ContractType {
  id: number;
  name: string;
  description: string;
}

interface JobFunction {
  id: number;
  name: string;
}

interface Company {
  id: number;
  name: string;
  websiteUrl: string;
  establishmentDate: Date;
  contactName: string;
  contactPhoneNumber: string;
  contactDepartment: string;
  isActive: boolean;
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
