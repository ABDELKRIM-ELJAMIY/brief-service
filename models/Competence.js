const mongoose = require('mongoose');

const competenceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Competence', competenceSchema); 