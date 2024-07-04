import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CountryDropdownComponent } from './components/country-dropdown/country-dropdown.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CountryDropdownComponent],
  imports: [CommonModule, DropdownModule, FormsModule, NgOptimizedImage],
  exports: [CountryDropdownComponent],
})
export class SharedModule {}
