import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CountryDropdownComponent } from './components/country-dropdown/country-dropdown.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [CountryDropdownComponent, FormFieldComponent],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    NgOptimizedImage,
    FloatLabelModule,
    TranslateModule,
  ],
  exports: [CountryDropdownComponent, FormFieldComponent],
})
export class SharedModule {}
