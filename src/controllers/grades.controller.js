import { Grade } from "../models/Grade.js";

export const getGrade = async (req, res) => {
    try {
        const grade = await Grade.findAll();
        res.json(grade);
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }
}

export const getOneGrade = async (req, res) => {
    const { id } = req.params
    try {
        const grade = await Grade.findOne({
            where: { id }
        })
        res.json(grade);
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }
}

export const createGrade = async (req, res) => {
    try {
        const { course, score, studentId } = req.body

        const newGrade = await Grade.create({
            course,
            score,
            studentId
        })
        res.json(newGrade);
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }
}

export const updateGrade = async (req, res) => {
    const { id } = req.params
    try {
        const grade = await Grade.findOne({
            where: { id }
        })
        grade.set(req.body);
        await grade.save();
        return res.json(grade);
    } catch (error) {
        return res.status(500).json({ message: error.message});
    }
}

export const deleteGrade = async (req, res) => {
    const { id } = req.params
    try {
        const result = await Grade.destroy({
            where: {id}
        });
        console.log(result);
        return res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: error.message});
    }
}