import { Request, Response } from "express";

const indexController = (req: Request, res: Response) => {
	res.sendFile(__dirname, "./client/build/index.html");
};

export default indexController;
