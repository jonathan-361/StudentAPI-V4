import express from "express";
import studentsRoutes from "./routes/students.routes.js";
import gradesRoutes from "./routes/grades.routes.js";

const app = express();

//middlewares
app.use(express.json());

app.use(studentsRoutes);
app.use(gradesRoutes);

export default app;