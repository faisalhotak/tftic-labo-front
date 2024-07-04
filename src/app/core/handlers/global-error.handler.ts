import { ErrorHandler, Injectable } from '@angular/core';
import { GenericError } from './errors/generic.error';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { ResourceNotFoundError } from './errors/resource-not-found.error';
import { Router } from '@angular/router';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  private static readonly DEFAULT_MSG_LIFE = 5_000;

  constructor(
    private readonly $message: MessageService,
    private readonly $translate: TranslateService,
    private readonly $router: Router,
  ) {}

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
    this.$router.navigate(['jobs']).then();
  }

  handleGenericError(error: GenericError): void {
    this.$message.add({
      severity: 'error',
      summary: this.$translate.instant(error.message + '.message'),
      detail: this.$translate.instant(error.message + '.detail'),
      life: GlobalErrorHandler.DEFAULT_MSG_LIFE,
    });
  }

  handleUnexpected(err: any) {
    console.error(err);
  }
}
