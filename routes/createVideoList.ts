import { Router } from "express";
import createVideoListController from "../controllers/createVideoListController";

const router = Router();

router.get("/add", createVideoListController);

export default router;
