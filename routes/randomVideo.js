const { Router } = require("express");
const randomVideoController = require("../controllers/randomVideoController");

const router = Router();

router.get("/random", randomVideoController);

module.exports = router;
