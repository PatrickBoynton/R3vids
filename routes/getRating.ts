import { Request, Response, Router } from "express";
import Video from "../models/video";


const router = Router();

router.get("/rating/:id", async (req: Request, res: Response) => {
	const videos = await Video.findByPk(req.params.id);
	
	res.send(JSON.stringify(videos.rating));
});

export default router;
