//define index function
function index(req, res) {
  res.send("show movies inside db");
}
//define show function
function show(req, res) {
  res.send(`show movie ${req.params.id}`);
}

module.exports = {
  index,
  show,
};
