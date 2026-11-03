interface ResponseStatus {
  message: string;
  error: any;
  code: number;
  type: string;
}

export const errorResponseFunc = ({message, error = null, code, type}: ResponseStatus) => {
  const finalResponse = {
    status: {
      message: message,
      error: error,
      code: code,
      type: type,
    },
  };

  return finalResponse;
};
interface SuccessResponseData {
  message: string;
  code: number;
  type: string;
  data: any;
  name: string;
}

export const successResponseFunc = ({message, code, type, data, name}: SuccessResponseData) => {
  const finalResponse = {
    status: {
      message: message,
      code: code,
      type: type,
    },
    data,
    name,
  };

  return finalResponse;
};

