import { Request, Response } from "express";
import Video from "../models/video";

const detailsController = async (req: Request, res: Response) => {
	const { id } = req.params;
	const video = await Video.findByPk(id);

	res.send(video);
};

export default detailsController;
