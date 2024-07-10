import { Company } from "./job";

export interface CompanyAdvertiser {
    jobAdvertiser: JobAdvertiser;
    company: Company;
}

interface JobAdvertiser {
    email: string;
    firstname: string;
    lastname: string;
    phoneNumber: string;
    contactEmail: string;
}