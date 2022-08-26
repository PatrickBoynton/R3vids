import { Router } from "express";
import videoListController from "../controllers/videoListController";

const router = Router();

router.get("/list", videoListController);

export default router;
