const videos = require("../utils/getVideos");
const Video = require("../models/video");

const videoListController = (req, res) => {
	videos.forEach((video) => Video.create({ path: video, hasPlayed: false }));
	res.send(videos);
};

module.exports = videoListController;
