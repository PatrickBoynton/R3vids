const videos = require("../utils/getVideos");
const Video = require("../models/video");
const { Sequelize } = require("sequelize");

const randomVideoController = async (req, res) => {
	const randVid = await Video.findAll({
		order: Sequelize.literal("rand()"),
		limit: 1,
	});

	const randomVideo = videos[Math.round(Math.random() * videos.length)];

	if (randVid === "") {
		res.send(randomVideo);
	}

	res.send(randVid[0].path);
};

module.exports = randomVideoController;
