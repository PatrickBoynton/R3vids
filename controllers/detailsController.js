const Video = require("../models/video");

const detailsController = async (req, res) => {
	const { id } = req.params;
	const video = await Video.findByPk(id);

	res.send(video);
};

module.exports = detailsController;
