import { Router } from "express";
import updateRatingController from "../controllers/updateRatingController";

const router = Router();

router.put("/rating/update", updateRatingController);

export default router;
