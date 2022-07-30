const { Router } = require("express");

const router = Router();

router.get("/", (req, res, next) => {
	res.sendFile(__dirname, "./client/build/index.html");
});

module.exports = router;
