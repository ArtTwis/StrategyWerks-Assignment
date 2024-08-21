import mongoose from "mongoose";

const IMDB_Schema = new mongoose.Schema({
  rating: { type: Number },
  votes: { type: Number },
});

const MovieSchema = new mongoose.Schema({
  poster: {
    type: String,
  },
  title: {
    type: String,
  },
  fullplot: {
    type: String,
  },
  imdb: {
    type: IMDB_Schema,
  },
  year: {
    type: Number,
  },
  type: {
    type: String,
  },
});

export const Movie = mongoose.model("Movie", MovieSchema, "movies");
