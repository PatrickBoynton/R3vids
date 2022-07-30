const { Router } = require("express");
const videos = require("../utils/getVideos");

const router = Router();

router.get("/random", (req, res) => {
	const randomVideo = videos[Math.round(Math.random() * videos.length)];

	res.send(randomVideo);
});

module.exports = router;
