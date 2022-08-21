const { Router } = require("express");
const Video = require("../models/video");

const router = Router();

router.get("/sort/", async (req, res) => {
	const videos = await Video.findAll({ order: [["type", "DESC"]] });
	res.send(videos);
});

module.exports = router;
