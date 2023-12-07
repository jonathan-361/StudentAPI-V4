import { Student } from "../models/Student.js";
import { Grade } from "../models/Grade.js";

export const getStudents = async (req, res) => {
    try {
        const students = await Student.findAll()
        res.json(students);
    } catch (error) {
        return res.status(500).json({ mesage: error.message })
    }
}

export const getOneStudent = async (req, res) => {
    try {
        const { id } = req.params
        const student = await Student.findOne({
            where: {
                id
            }
        })

        if (!student) return res.status(404).json({ message: "Student does not exist "});

        res.json(student);
    } catch (error) {
        return res.status(500).json({ mesage: error.message })
    }
}

export const createStudent = async (req, res) => {
    const {name} = req.body
    try {
        const newStudent = await Student.create({
            name
        })

        res.json(newStudent);
    } catch (error) {
        return res.status(500).json({ mesage: error.message })
    }
    
}

export const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        const student = await Student.findByPk(id)
        student.name = name;
        await student.save();

        res.json(student);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
    
}

export const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        await Student.destroy({
            where: {
                id,
            },
        })
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getStudentsGrades = async (req, res) => {
    const {id} = req.params
    const grades = await Grade.findAll({
        where: { studentId: id },
    });
    res.json(grades);
}