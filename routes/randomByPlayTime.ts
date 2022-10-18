import { Router } from "express";

import randomByPlayTimeController from "../controllers/randomByPlayTimeController";

const router = Router();

router.get("/random/time", randomByPlayTimeController);


export default router;