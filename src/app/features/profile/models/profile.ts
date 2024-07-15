export interface Profile {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  phoneNumber: string;
  contactEmail: string;
  address: Address;
  birthDate?: Date;
  gender?: string;
}

interface Address {
  id: number;
  zip: number;
  country: string;
  city: string;
  street: string;
}

