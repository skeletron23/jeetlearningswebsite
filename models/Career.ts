import mongoose from 'mongoose';

const CareerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    shortDescription: String,
    detailedDescription: String,

    // Psychometric alignment
    personalityWeights: {
        openness: { type: Number, default: 0 },
        conscientiousness: { type: Number, default: 0 },
        extraversion: { type: Number, default: 0 },
        agreeableness: { type: Number, default: 0 },
        neuroticism: { type: Number, default: 0 }
    },
    interestWeights: {
        realistic: { type: Number, default: 0 },
        investigative: { type: Number, default: 0 },
        artistic: { type: Number, default: 0 },
        social: { type: Number, default: 0 },
        enterprising: { type: Number, default: 0 },
        conventional: { type: Number, default: 0 }
    },
    aptitudeRequired: {
        numerical: { type: Number, default: 0 },
        verbal: { type: Number, default: 0 },
        logical: { type: Number, default: 0 },
        spatial: { type: Number, default: 0 }
    },

    // Practical details
    skills: [String],
    educationPathways: [String],
    entranceExams: [String],
    salaryRange: {
        entry: Number,
        mid: Number,
        senior: Number
    },
    growthOutlook: Number, // 0-100
    difficultyIndex: Number, // 1-10
    relatedCareers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Career' }],

    images: [String],
    active: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Career || mongoose.model('Career', CareerSchema);
