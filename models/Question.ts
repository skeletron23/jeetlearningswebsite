import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({
    text: { type: String, required: true },
    type: {
        type: String,
        enum: ['personality', 'interest', 'aptitude', 'values', 'skills'],
        required: true
    },
    dimension: { type: String, required: true }, // e.g., 'openness', 'realistic'
    options: [{
        text: String,
        value: Number, // The score value (e.g., 1-5 for Likert)
    }],
    reverseScored: { type: Boolean, default: false },
    category: String,
    weight: { type: Number, default: 1 },
    active: { type: Boolean, default: true },
    version: { type: Number, default: 1 }
});

export default mongoose.models.Question || mongoose.model('Question', QuestionSchema);
