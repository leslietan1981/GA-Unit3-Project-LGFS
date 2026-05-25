export const getErrorObj = (status, message) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

export const setErrorObj = (error, status, message = undefined) => {
  error.status = status;
  if (message) error.message = message;
  return error;
};
