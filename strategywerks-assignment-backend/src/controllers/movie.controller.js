import { asyncHandler } from "../utils/AsyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import { errorMessages } from "../constant/errorMessage.js";
import { successMessages } from "../constant/successMessage.js";
import { Movie } from "../models/movie.model.js";

export const getAllMovies = asyncHandler(async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;

    const limit = Number(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    const movieResponse = await Movie.find().limit(limit).skip(skip);

    if (!movieResponse) {
      return res
        .status(500)
        .json(new ApiError(500, errorMessages.failedToRetrievedRecords));
    }

    return res
      .status(201)
      .json(
        new ApiResponse(201, movieResponse, successMessages.recordsRetrieved)
      );
  } catch (error) {
    return res
      .status(417)
      .json(new ApiError(417, errorMessages.internalServerError, error));
  }
});
