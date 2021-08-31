const reviewsService = require("./reviews.service");
//const hasProperties = require("../errors/hasProperties");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res) {
  const data = await reviewsService.list();
}

//review exist...............................................

module.exports = {
  list: asyncErrorBoundary(list),
};
