import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CountryDropdownComponent } from './components/country-dropdown/country-dropdown.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TranslateModule } from '@ngx-translate/core';
import { GenericCardComponent } from './components/generic-card/generic-card.component';
import { CardModule } from 'primeng/card';
import { Button } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [
    CountryDropdownComponent,
    FormFieldComponent,
    GenericCardComponent,
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
  exports: [CountryDropdownComponent, FormFieldComponent, GenericCardComponent],
})
export class SharedModule {}
