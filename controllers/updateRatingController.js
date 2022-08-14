const Video = require("../models/video");

const updateRatingController = async (req, res) => {
	const { path } = req.body;
	const { rating } = req.body;

	await Video.update({ rating }, { where: { path } });

	res.status(204).send({ message: "Updated video" });
};

module.exports = updateRatingController;
