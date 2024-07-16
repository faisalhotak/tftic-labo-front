import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() url!: string;
  @Input() item!: any;

  private readonly router: Router = inject(Router);

  showDetails() {
    this.router.navigate([this.url, this.item.id]).then();
  }
}
