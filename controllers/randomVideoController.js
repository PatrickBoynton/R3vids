const videos = require("../utils/getVideos");

const randomVideoController = (req, res) => {
	const randomVideo = videos[Math.round(Math.random() * videos.length)];

	res.send(randomVideo);
};

module.exports = randomVideoController;
