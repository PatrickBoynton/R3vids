const { Router } = require("express");
const detailsController = require("../controllers/detailsController");

const router = Router();

router.get("/details/:id", detailsController);

module.exports = router;
