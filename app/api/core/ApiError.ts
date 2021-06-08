export default class ApiError extends Error {
  constructor(
    readonly httpStatus: number,
    readonly message: string,
    readonly code: string,
    readonly data: unknown,
  ) {
    super(message);
  }

  public toString(): string {
    return `${this.httpStatus} - ${this.message} - ${
      this.code
    } - ${JSON.stringify(this.data)}`;
  }
}
