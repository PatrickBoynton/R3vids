import Video from "../models/video";
import { Sequelize } from "sequelize";
import { Request, Response } from "express";
import IVideo from "../models/IVideo";

const randomVideoController = async (req: Request, res: Response) => {
	const randVid: IVideo = await Video.findAll({
		order: Sequelize.literal("rand()"),
		limit: 1,
		benchmark: true,
		logging: console.log,
	});
	res.send(randVid[0].path);

	Video.update({ hasPlayed: true }, { where: { path: randVid[0].path } });
};

export default randomVideoController;
