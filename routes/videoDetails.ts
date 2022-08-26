import { Router } from "express";
import detailsController from "../controllers/detailsController";

const router = Router();

router.get("/details/:id", detailsController);

export default router;
