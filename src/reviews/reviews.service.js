const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties");

function list() {
  return knex("reviews").select("*");
}

function create(review) {
  return knex("reviews")
    .insert(review)
    .returning("*")
    .then((createdReview) => createdReview[0]);
}

const addCritics = mapProperties({
  critic_id: "critic_id",
  preferred_name: "preferred_name",
  surname: "surname",
  organization_name: "organization_name",
});

function read(review_id) {
  return knex("reviews")
    .select("*")
    .where({ review_id })
    .first()
    .then(addCritics);
}

function update(newReview) {
  return knex("reviews")
    .select("*")
    .where({ review_id: newReview.review_id })
    .update(newReview, "*")
    .then((updatedRecords) => updatedRecords[0]);
}

function destroy(review_id) {
  return knex("reviews").where({ review_id }).del();
}

module.exports = {
  list,
  create,
  read,
  update,
  destroy,
};
