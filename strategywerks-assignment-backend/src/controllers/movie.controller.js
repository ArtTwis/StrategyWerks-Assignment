import { asyncHandler } from "../utils/AsyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import { errorMessages } from "../constant/errorMessage.js";
import { successMessages } from "../constant/successMessage.js";
import { Movie } from "../models/movie.model.js";

export const getAllMovies = asyncHandler(async (req, res) => {
  try {
    return res.status(201).json(new ApiResponse(201, "null", "Success"));
  } catch (error) {
    console.log("error :>>", error);
    return res
      .status(417)
      .json(new ApiError(417, errorMessages.internalServerError));
  }
});
