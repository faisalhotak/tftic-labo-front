import {GenericError} from "./generic.error";

export class ResourceNotFoundError extends GenericError {

  constructor() {
    super('error.http.404','error');
  }

}
