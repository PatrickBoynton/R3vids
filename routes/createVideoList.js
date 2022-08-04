const { Router } = require("express");
const createVideoListController = require("../controllers/createVideoListController");

const router = Router();

router.get("/add", createVideoListController);

module.exports = router;
