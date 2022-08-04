const videos = require("../utils/getVideos");
const Video = require("../models/video");

const createVideoListController = (req, res) => {
	videos.forEach((video) => Video.create({ path: video, hasPlayed: false }));

	res.status(201).send({ message: "Videos added." });
};

module.exports = createVideoListController;
