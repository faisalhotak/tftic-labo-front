import { Company } from "./company";
export type AdvertiserRole = 'OWNER' | 'EMPLOYEE' | 'PARTNER';

export interface CompanyAdvertiser {
    id: number;
    jobAdvertiser: JobAdvertiser;
    company: Company;
    advertiserRole: AdvertiserRole;
    createdAt: Date;
}

interface JobAdvertiser {
    email: string;
    firstname: string;
    lastname: string;
    phoneNumber: string;
    contactEmail: string;
}
