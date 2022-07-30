const videos = require("../utils/getVideos");

const videoListController = (req, res) => {
	res.send(videos);
};

module.exports = videoListController;
