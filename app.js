const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const videoList = require("./routes/videoList");
const randomVideo = require("./routes/randomVideo");
const createVideoList = require("./routes/createVideoList");
const index = require("./routes/index");
const sequelize = require("./utils/database");

dotenv.config();

const app = express();

app.use(cors());

sequelize.sync();

app.use(express.json());

app.use("/Video", express.static("D:\\Extras\\"));

app.use(express.static(path.join(__dirname, "./client/build")));

app.use("/Video", randomVideo);

app.use("/Video", videoList);

app.use("/Video", createVideoList);

app.use("/", index);

app.listen(process.env.PORT, () =>
	console.log(`Now listening on port ${process.env.PORT}`)
);
