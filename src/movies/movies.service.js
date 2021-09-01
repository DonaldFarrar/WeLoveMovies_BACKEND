const knex = require("../db/connection");

async function list(isShowing) {
  if (isShowing) {
    return await listActiveMovies();
  }
  return knex("movies").select("*");
}

function read(movie_id) {
  return knex("movies").select("*").where({ movie_id }).first();
}

//HELPER
function listActiveMovies() {
  return knex("movies as m")
    .join("movies_theaters as mt", "mt.movie_id", "m.movie_id")
    .select("m.*", "mt.*")
    .where({ is_showing: true })
    .groupBy("m.movie_id");
}

module.exports = {
  list,
  read,
};
