import { type Request, type Response, type NextFunction } from "express";

import { InternalServerError } from "@/errors/internalServerError";
import { ValidationError } from "@/errors/validationError";

const errorHandler = async (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof ValidationError) {
    return res.status(error.statusCode).json(error);
  }

  const publicErrorObject = new InternalServerError({
    cause: error,
  });

  console.error(publicErrorObject);
  res.status(publicErrorObject.statusCode).json(publicErrorObject);
};

export default errorHandler;
