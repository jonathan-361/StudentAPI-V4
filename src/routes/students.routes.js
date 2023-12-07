import { Router } from "express";
import { getStudents, getOneStudent, createStudent, updateStudent, deleteStudent, getStudentsGrades} from "../controllers/students.controller.js";

const router = Router();

router.get("/api/students", getStudents);
router.post("/api/students", createStudent);
router.put("/api/students/:id", updateStudent);
router.delete("/api/students/:id", deleteStudent);
router.get("/api/students/:id", getOneStudent);

router.get("/api/students/:id/grades", getStudentsGrades);

export default router;