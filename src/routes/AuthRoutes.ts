import { Router } from "express";

import AuthController from "../controller/AuthCtrl";

const router = Router();

router.post("/auth", AuthController.auth);

export default router;
