const { Router } = require("express");

const router = Router();

router.get("/Video", (req, res) => {
	res.send("GET RATINGS");
});
