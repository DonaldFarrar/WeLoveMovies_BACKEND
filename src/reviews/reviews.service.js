const knex = require("../db/connection");

function list() {
  return knex("reviews").select("*");
}

function create(review) {
  return knex("reviews")
  .insert(review)
  .returning("*")
  .then((createdReview) => createdReview[0]);
}

function read(review_id) {
  return knex("reviews").select("*").where({ review_id }).first();
}

function update(newReview) {
  return knex("reviews")
  .select("*")
  .where({review_id: newReview.review_id})
  .update(newReview, "*")
  .then((updatedRecords) => updatedRecords[0]);
}

function destroy(review_id) {
  return knex("reviews").where({reviewa_id}).del();
}

module.exports = {
  list,
  create,
  read,
  update,
  destroy,
};
