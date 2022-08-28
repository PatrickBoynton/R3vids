import { Request, Response } from "express";
import Video from "../models/video";

const updateRatingController = async (req: Request, res: Response) => {
	const { path } = req.body;
	const { rating } = req.body;

	await Video.update({ rating }, { where: { path } });

	res.status(204).send({ message: "Updated video" });
};

export default updateRatingController;
