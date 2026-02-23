import mongoose from 'mongoose';

const AssessmentSessionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, enum: ['free-audit', 'full-psychometric'], required: true },
    status: { type: String, enum: ['in-progress', 'completed'], default: 'in-progress' },
    responses: [{
        questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
        value: Number,
        responseTimeMs: Number
    }],
    scores: {
        personality: mongoose.Schema.Types.Mixed,
        interest: mongoose.Schema.Types.Mixed,
        aptitude: mongoose.Schema.Types.Mixed,
        values: mongoose.Schema.Types.Mixed
    },
    careerMatches: [{
        careerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Career' },
        score: Number,
        explanation: String
    }],
    validityFlags: {
        straightLining: Boolean,
        speedDetection: Boolean,
        consistencyScore: Number
    },
    startTime: { type: Date, default: Date.now },
    endTime: Date
});

export default mongoose.models.AssessmentSession || mongoose.model('AssessmentSession', AssessmentSessionSchema);
