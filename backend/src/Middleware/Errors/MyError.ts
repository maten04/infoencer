import { CustomError } from "./CustomError";

export default class MyError extends CustomError {
  private _code: number;

  constructor(params?: { code?: number; message?: string }) {
    const { code, message } = params || {};

    super(message || "Bad request");
    this._code = code || 400;

    Object.setPrototypeOf(this, MyError.prototype);
  }

  get errors() {
    return [{ message: this.message }];
  }

  get statusCode() {
    return this._code;
  }
}
