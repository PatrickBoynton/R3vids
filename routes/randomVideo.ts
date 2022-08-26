import { Router } from "express";
import randomVideoController from "../controllers/randomVideoController";

const router = Router();

router.get("/random", randomVideoController);

export default router;
