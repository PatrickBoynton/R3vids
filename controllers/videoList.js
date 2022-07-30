const { Router } = require("express");
const videos = require("../utils/getVideos");

const router = Router();

router.get("/list", (req, res) => {
	res.send(videos);
});

module.exports = router;
