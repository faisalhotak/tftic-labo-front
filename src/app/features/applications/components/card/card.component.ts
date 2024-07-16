import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Application } from '../../models/application';

type Severity = 'success' | 'info' | 'warning' | 'danger' | null | undefined;

const STATUS = {
  SUBMITTED: 'primary',
  UNDER_REVIEW: 'info',
  ACCEPTED: 'success',
  CANCELLED: 'warning',
  REJECTED: 'danger',
};

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() url!: string;
  @Input() item!: Application;

  private readonly router: Router = inject(Router);

  showDetails() {
    this.router.navigate([this.url, this.item.id]).then();
  }

  getSeverity(): Severity {
    return STATUS[this.item.applicationStatus] as Severity;
  }
}
