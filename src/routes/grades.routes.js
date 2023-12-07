import { Router } from "express";
import { getGrade, getOneGrade, createGrade, updateGrade, deleteGrade } from "../controllers/grades.controller.js";

const router = Router();

router.get("/api/grades", getGrade);
router.post("/api/grades", createGrade);
router.put("/api/grades/:id", updateGrade);
router.delete("/api/grades/:id", deleteGrade);
router.get("/api/grades/:id", getOneGrade);

export default router;