import { Router } from "express";
import Video from "../models/video";

const router = Router();

router.get("/sort/", async (req, res) => {
	const videos = await Video.findAll({ order: [["type", "DESC"]] });
	res.send(videos);
});

export default router;
