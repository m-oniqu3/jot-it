const handleError = (err) => {
  let errorObject = { name: "", email: "", password: "" };

  //duplicate error code
  if (err.code === 11000) {
    errorObject.email = "That email is already registered";
    return errorObject;
  }

  // validation errors
  // get the values then loop over them
  if (err.name === "ValidationError") {
    Object.values(err.errors).forEach((error) => {
      errorObject[error.path] = error.message;
    });
  }

  return errorObject;
};

module.exports = handleError;
