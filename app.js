const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const videoList = require("./routes/videoList");
const randomVideo = require("./routes/randomVideo");
const index = require("./routes/index");

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/Video", express.static("D:\\Extras\\"));

app.use(express.static(path.join(__dirname, "./client/build")));

app.use("/Video", randomVideo);

app.use("/Video", videoList);

app.use("/", index);

app.listen(process.env.PORT, () =>
	console.log(`Now listening on port ${process.env.PORT}`)
);
