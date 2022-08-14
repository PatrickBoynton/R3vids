const { Router } = require("express");
const updateRatingController = require("../controllers/updateRatingController");

const router = Router();

router.put("/rating/", updateRatingController);

module.exports = router;
