const { Router } = require("express");
const videoListController = require("../controllers/videoListController");

const router = Router();

router.get("/list", videoListController);

module.exports = router;
