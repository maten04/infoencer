export type CustomErrorContent = {
  message: string;
};

export abstract class CustomError extends Error {
  abstract statusCode: number;
  abstract errors: CustomErrorContent[];

  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, CustomError.prototype);
  }
}
