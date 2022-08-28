import { Request, Response } from "express";
import Video from "../models/video";
import IVideo from "../models/IVideo";
import videos from "../utils/getVideos";

const videoListController = async (req: Request, res: Response) => {
	const videosFromDb: IVideo[] = await Video.findAll({
		benchmark: true,
		logging: console.log,
		attributes: ["path"],
	});
	let vids: string[] = [];

	videosFromDb.map((video: IVideo) => vids.push(video.path));

	if (vids.length > 0) {
		res.send(vids);
	} else {
		res.send(videos);
	}
};

export default videoListController;
