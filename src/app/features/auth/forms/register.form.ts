import { Validators } from '@angular/forms';

export interface IRegisterForm {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  phoneNumber: string;
  contactEmail: string;
  zip: number;
  country: string;
  city: string;
  street: string;
}

export interface IRegisterSeekerForm extends IRegisterForm {
  gender: string;
  birthDate: string;
}

export const REGISTER_FORM = {
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required]],
  firstname: ['', [Validators.required]],
  lastname: ['', [Validators.required]],
  phoneNumber: ['', [Validators.required]],
  contactEmail: ['', [Validators.required, Validators.email]],
  zip: ['', [Validators.required]],
  country: ['', [Validators.required]],
  city: ['', [Validators.required]],
  street: ['', [Validators.required]],
};

export const REGISTER_ADVERTISER_FORM = {
  ...REGISTER_FORM,
};

export const REGISTER_SEEKER_FORM = {
  ...REGISTER_FORM,
  gender: ['', [Validators.required]],
  birthDate: ['', [Validators.required]],
};
