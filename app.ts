import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import videoList from "./routes/videoList";
import randomVideo from "./routes/randomVideo";
import createVideoList from "./routes/createVideoList";
import videoDetails from "./routes/videoDetails";
import updateRating from "./routes/updateRating";
import sortByType from "./routes/sortByType";
import getRating from "./routes/getRating";
import index from "./routes/index";
import sequelize from "./utils/database";

dotenv.config();

const app = express();

app.use(cors());

sequelize.sync();

app.use(express.json());

app.use("/Video", express.static("D:\\Extras\\"));

app.use(express.static(path.join(__dirname, "./client/build")));

app.use("/Video", sortByType);

app.use("/Video", getRating);

app.use("/Video", updateRating);

app.use("/Video", randomVideo);

app.use("/Video", videoList);

app.use("/Video", createVideoList);

app.use("/Video", videoDetails);

app.use("/", index);

app.listen(process.env.PORT, () =>
	console.log(`Now listening on port ${process.env.PORT}`)
);
