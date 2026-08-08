export class ValidationError extends Error {
  action: string;
  statusCode: number;

  constructor({
    message,
    action,
    cause,
  }: {
    message?: string;
    action?: string;
    cause?: unknown;
  }) {
    super(message || "A validation error occurred.", { cause });

    this.name = "ValidationError";
    this.action = action || "Adjust the submitted data and try again.";
    this.statusCode = 400;
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
