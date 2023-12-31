function handleError(err, req, res, next) {
  // console.log(err instanceof ValidationError);

  if (err instanceof NotFoundError) {
    res.status(404).render("error", {
      message: "Nie można zlaleźć elementu o danym ID",
    });
    return;
  }

  res.status(err instanceof ValidationError ? 400 : 500);

  res.render("error", {
    message:
      err instanceof ValidationError
        ? err.message
        : "przepraszamy, spróbuj ponownie za jakiś czas ",
  });
}

class NotFoundError extends Error {}

class ValidationError extends Error {}

module.exports = {
  handleError,
  ValidationError,
  NotFoundError,
};
