import { Router } from "express";

const router = Router();

router.get("/Video", (req, res) => {
	res.send("GET RATINGS");
});

export default router;
