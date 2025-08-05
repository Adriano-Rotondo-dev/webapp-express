const serverError = (err, req, res, next) => {
  res.status(500).json({
    error: true,
    message: "Server Error",
  });
};
module.exports = serverError;
