import { Component } from '@angular/core';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrl: './job-form.component.scss'
})
export class JobFormComponent {

  contractTypes: string[] = ['CDI', 'CDD'];
  jobFunctions: string[] = ['Développeur', 'Designer', 'Product Owner'];
}
