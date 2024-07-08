export class GenericError extends Error {

  constructor(
    message: string,
    public readonly severity?: string,
    public readonly data?: {[key: string]: any},
    options?: ErrorOptions
  ) {
    super(message, options);
  }

}
