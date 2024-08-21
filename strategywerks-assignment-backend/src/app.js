import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import logger from "../logger.js";
import { notFoundMiddleware } from "./middlewares/notFound.middleware.js";

const app = express();

const morganFormat = ":method :url :status :response-time ms";

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    allowedHeaders: "",
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));

app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);

app.use(helmet());

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

app.use(express.static("public"));

import movieRouter from "./routes/movie.routes.js";

app.use(`/api/${process.env.STRATEGY_WERKS_API_VERSION}/route`, movieRouter);

app.use(notFoundMiddleware);

export default app;
