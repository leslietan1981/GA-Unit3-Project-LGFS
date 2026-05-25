export const getErrorObj = (status, message, consoleMessage = undefined) => {
  console.error(consoleMessage && message);
  const error = new Error(message);
  error.status = status;
  return error;
};

export const setErrorObj = (error, status, message = undefined, consoleMessage = undefined) => {
  console.error(consoleMessage && message);
  error.status = status;
  if (message) error.message = message;
  return error;
};

export const getResponseJSON = (data = undefined, message = undefined) => {
  const responseJSON = { status: "ok" };
  if (data) responseJSON.result = data;
  if (message) responseJSON.message = message;
  return responseJSON;
};
