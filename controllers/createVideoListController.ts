import videos from "../utils/getVideos";
import Video from "../models/video";
import { Request, Response } from "express";
import IVideo from "../models/IVideo";

const createVideoListController = (req: Request, res: Response) => {
	videos.forEach((video: string): IVideo => Video.create({ path: video, hasPlayed: false }));

	res.status(201).send({ message: "Videos added." });

	if (videos.length === 0) {
		res.send({ message: "No videos to add." });
	}
};

export default createVideoListController;
