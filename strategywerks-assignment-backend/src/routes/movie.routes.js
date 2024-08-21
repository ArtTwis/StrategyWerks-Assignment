import { Router } from "express";
import { getAllMovies } from "../controllers/movie.controller.js";

const router = Router();

router.route("/movies").get(getAllMovies);

export default router;
