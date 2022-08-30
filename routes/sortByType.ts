import { Request, Response, Router } from "express";
import IVideo from "../models/IVideo";
import Video from "../models/video";

const router = Router();

router.get("/sort/", async (req: Request, res: Response) => {
	const videos: IVideo = await Video.findAll({ order: [["type", "DESC"]] });
	
	res.send(videos);
});

export default router;
