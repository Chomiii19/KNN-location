class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode || 500;
    this.status = `${this.statusCode}`.startsWith("4") ? "Fail" : "Error";
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
