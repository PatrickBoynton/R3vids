import { Router } from "express";
import typesController from "../controllers/typesController";

const router = Router();

router.get("/types", typesController);

export default router;