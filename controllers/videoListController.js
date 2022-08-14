const Video = require("../models/video");
const videos = require("../utils/getVideos");

const videoListController = async (req, res) => {
	const videosFromDb = await Video.findAll({
		benchmark: true,
		logging: console.log,
		attributes: ["path"],
	});
	let vids = [];

	videosFromDb.map((video) => vids.push(video.path));

	if (vids.length > 0) {
		res.send(vids);
	} else {
		res.send(videos);
	}
};

module.exports = videoListController;
