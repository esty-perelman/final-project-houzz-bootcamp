import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const basicAppWithExpress = (api) => {
  const app = express();
  const corsOptions = {
    origin: process.env.CLIENT_URL | "http://localhost:3000", //included origin as true
    credentials: true, //included credentials as true
};
app.use(cors(corsOptions));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(cookieParser());

  const PORT = process.env.PORT || "8080";

  app.listen(PORT, () => {
    console.log(`server run on: http://localhost:${PORT}`);
  });

  return app;
};
export default basicAppWithExpress;
