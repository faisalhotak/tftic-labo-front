import { ErrorHandler, Injectable, inject } from '@angular/core';
import { GenericError } from './errors/generic.error';
import { ResourceNotFoundError } from './errors/resource-not-found.error';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  private readonly notificationService = inject(NotificationService);
  private readonly router = inject(Router);

  handleError(error: any): void {
    if (error instanceof ResourceNotFoundError) {
      this.handleResourceNotFound(error);
    } else if (error instanceof GenericError) {
      this.handleGenericError(error);
    } else {
      this.handleUnexpected(error);
    }
  }

  handleResourceNotFound(error: ResourceNotFoundError): void {
    this.handleGenericError(error);
    this.router.navigate(['jobs']).then();
  }

  handleGenericError(error: GenericError): void {
    this.notificationService.showError(
      `${error.message}.message`,
      `${error.message}.detail`,
    );
  }

  handleUnexpected(err: any) {
    console.error(err);
  }
}
