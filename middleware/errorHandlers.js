module.exports.errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return;
  }

  res.status(err.status ?? 500).send({ message: err.message ?? 'Sever Error' });
};
