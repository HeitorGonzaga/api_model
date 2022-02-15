import { Router } from "express";

import FuncionariosCtrl from "../controller/FuncionariosCtrl";

const router = Router();

router.get("", FuncionariosCtrl.get);
router.post("", FuncionariosCtrl.add);
router.delete("/:id", FuncionariosCtrl.delete);
router.put("/:id", FuncionariosCtrl.update);

export default router;
