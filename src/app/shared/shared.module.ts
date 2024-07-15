import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CountryDropdownComponent } from './components/country-dropdown/country-dropdown.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TranslateModule } from '@ngx-translate/core';
import { ApplyJobFormComponent } from '../features/jobs/components/apply-job-form/apply-job-form.component';
import { Button } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [
    CountryDropdownComponent,
    FormFieldComponent,
  ],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    NgOptimizedImage,
    FloatLabelModule,
    TranslateModule,
    ReactiveFormsModule,
    Button,
    CardModule,
    InputSwitchModule,
    CheckboxModule,
  ],
  exports: [
    CountryDropdownComponent,
    FormFieldComponent,
  ],
})
export class SharedModule {}
