import { Company } from "./company";


export interface CompanyAdvertiser {
    id: number;
    jobAdvertiser: JobAdvertiser;
    company: Company;
    advertiserRole: string;
    createdAt: Date;
}

interface JobAdvertiser {
    email: string;
    firstname: string;
    lastname: string;
    phoneNumber: string;
    contactEmail: string;
}
