import { Company } from "./company";
export type advertiserRoleType = 'OWNER' | 'EMPLOYEE' | 'PARTNER';

export interface CompanyAdvertiser {
    id: number;
    jobAdvertiser: JobAdvertiser;
    company: Company;
    advertiserRole: advertiserRoleType;
    createdAt: Date;
}

interface JobAdvertiser {
    email: string;
    firstname: string;
    lastname: string;
    phoneNumber: string;
    contactEmail: string;
}
