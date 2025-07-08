const Brief = require('../models/Brief');

exports.createBrief = async (req, res, next) => {
    try {
        const { title, description, competences } = req.body;
        const brief = new Brief({ title, description, competences });
        const savedBrief = await brief.save();
        res.status(201).json(savedBrief);
    } catch (error) {
        next(error);
    }
};