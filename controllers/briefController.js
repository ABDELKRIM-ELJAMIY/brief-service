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

exports.getAllBriefs = async (req, res, next) => {
    try {
        const briefs = await Brief.find().populate('competences');
        res.status(200).json(briefs);
    } catch (error) {
        next(error);
    }
};

// Get a brief by ID
exports.getBriefById = async (req, res, next) => {
    try {
        const brief = await Brief.findById(req.params.id).populate('competences');
        if (!brief) {
            return res.status(404).json({ message: 'Brief not found' });
        }
        res.status(200).json(brief);
    } catch (error) {
        next(error);
    }
};

// Update a brief by ID
exports.updateBriefById = async (req, res, next) => {
    try {
        const { title, description, competences } = req.body;
        const updatedBrief = await Brief.findByIdAndUpdate(
            req.params.id,
            { title, description, competences, updatedAt: Date.now() },
            { new: true, runValidators: true }
        ).populate('competences');
        if (!updatedBrief) {
            return res.status(404).json({ message: 'Brief not found' });
        }
        res.status(200).json(updatedBrief);
    } catch (error) {
        next(error);
    }
};

// Delete a brief by ID
exports.deleteBriefById = async (req, res, next) => {
    try {
        const deletedBrief = await Brief.findByIdAndDelete(req.params.id);
        if (!deletedBrief) {
            return res.status(404).json({ message: 'Brief not found' });
        }
        res.status(200).json({ message: 'Brief deleted successfully' });
    } catch (error) {
        next(error);
    }
};