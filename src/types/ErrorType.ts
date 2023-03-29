export interface ErrorType {
  response: {
    data: {
      message: string;
      statusCode: number;
    };
  };
}
