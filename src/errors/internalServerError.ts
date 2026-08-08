export class InternalServerError extends Error {
  action: string;
  statusCode: number;

  constructor({ statusCode, cause }: { statusCode?: number; cause: unknown }) {
    super("An unexpected error occurred.", { cause });

    this.name = "InternalServerError";
    this.action = "Please, contact the support.";
    this.statusCode = statusCode || 500;
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_code: this.statusCode,
    };
  }
}
