const handleError = (err) => {
  let errorObject = { name: "", email: "", password: "" };
  console.log(err);
  console.log(err.name, err.message);

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

  //invalid email
  if (err.message === "Invalid email format") {
    errorObject.email = "Invalid email format";
  }

  //incorrect email
  if (err.message === "incorrect email") {
    errorObject.email = "That email is not registered";
  }

  //incorrect password
  if (err.message === "incorrect password") {
    errorObject.password = "That password is incorrect";
  }

  return errorObject;
};

const handleNoteError = (err) => {
  const errorObject = { title: "", subtitle: "", category: "", content: "" };

  if (err.name === "ValidationError") {
    Object.values(err.errors).forEach((error) => {
      errorObject[error.path] = error.message;
    });
  }

  return errorObject;
};

module.exports = { handleError, handleNoteError };
