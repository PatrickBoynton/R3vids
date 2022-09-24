import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import videoList from "./routes/videoList";
import randomVideo from "./routes/randomVideo";
import updateVideoPath from "./routes/updateVideoPath";
import createVideoList from "./routes/createVideoList";
import videoDetails from "./routes/videoDetails";
import updateRating from "./routes/updateRating";
import sortByType from "./routes/sortByType";
import getRating from "./routes/getRating";
import index from "./routes/index";
import sequelize from "./utils/database";
import getTypes from "./routes/sendTypes";
import Type from "./models/Type";
import Video from "./models/video";
import getVideos from "./utils/getVideos";
import displayPath from "./utils/displayPath";
import IVideo from "./models/IVideo";

dotenv.config();

const app = express();

app.use(cors());

sequelize.sync({alter: true, logging: false}).then(async () => {
	const testVideo: IVideo = await Video.findByPk(1);
	const isCorrectPath: boolean = testVideo.path.includes(displayPath);

	if(!isCorrectPath){
		const videos: IVideo[] = await Video.findAll();
		videos.map((video: any) => video.update({path: displayPath + (video.path.split("/Video/")[1])}));
	}
});

app.use(express.json());

app.use("/Video", express.static("D:\\Extras\\"));

app.use(express.static(path.join(__dirname, "./client/build")));

app.use("/Video", getTypes)

app.use("/Video", sortByType);

app.use("/Video", getRating);

app.use("/Video", updateRating);

app.use("/Video", randomVideo);

app.use("/Video", videoList);

app.use("/Video", updateVideoPath);

app.use("/Video", createVideoList);

app.use("/Video", videoDetails);

app.use("/", index);

app.listen(process.env.PORT, () =>{
	// Video.findAll().then((x: any) => x.map(v => console.log(displayPath + v.path.split("/Video/")[1])))
	console.log(`Now listening on port ${process.env.PORT}`)
});
