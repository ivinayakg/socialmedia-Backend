const notFoundMiddleware = (req, res) =>
  res.status(404).send("This Route doesn't exists ");

module.exports = notFoundMiddleware;
