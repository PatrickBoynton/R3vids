const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const videoList = require("./routes/videoList");
const randomVideo = require("./routes/randomVideo");
const createVideoList = require("./routes/createVideoList");
const videoDetails = require("./routes/videoDetails");
const updateRating = require("./routes/updateRating");
const sortByType = require("./routes/sortByType");
const index = require("./routes/index");
const sequelize = require("./utils/database");

dotenv.config();

const app = express();

app.use(cors());

sequelize.sync();

app.use(express.json());

console.log(process.env.NODE_ENV);

app.use("/Video", express.static("D:\\Extras\\"));

app.use(express.static(path.join(__dirname, "./client/build")));

app.use("/Video", sortByType);

app.use("/Video", updateRating);

app.use("/Video", randomVideo);

app.use("/Video", videoList);

app.use("/Video", createVideoList);

app.use("/Video", videoDetails);

app.use("/", index);

app.listen(process.env.PORT, () =>
	console.log(`Now listening on port ${process.env.PORT}`)
);
