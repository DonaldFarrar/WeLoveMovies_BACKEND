const service = require("./theaters.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

//CRUDL FUNCTIONS
async function list(req, res) {
  const movieId = parseInt(req.params.movieId);

  if (!movieId) {
    const data = await service.list();
    res.json({ data });
  } else {
    const data = await service.listTheatersShowingMovie(movieId);
    res.json({ data: data });
  }
}

module.exports = {
  list: asyncErrorBoundary(list),
  listTheatersShowingMovie: asyncErrorBoundary(list),
};
