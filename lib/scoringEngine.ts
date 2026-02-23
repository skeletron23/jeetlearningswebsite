export interface DimensionScore {
    [dimension: string]: number;
}

export interface AssessmentResult {
    personality: DimensionScore;
    interest: DimensionScore;
    aptitude: DimensionScore;
    values: DimensionScore;
}

export const calculateScores = (responses: any[], questions: any[]): AssessmentResult => {
    const scores: any = {
        personality: {},
        interest: {},
        aptitude: {},
        values: {}
    };

    const counts: any = {
        personality: {},
        interest: {},
        aptitude: {},
        values: {}
    };

    responses.forEach(resp => {
        const question = questions.find(q => q._id.toString() === resp.questionId.toString());
        if (!question) return;

        const type = question.type;
        const dimension = question.dimension;
        let value = resp.value;

        if (question.reverseScored) {
            // Assuming 1-5 scale
            value = 6 - value;
        }

        if (!scores[type][dimension]) {
            scores[type][dimension] = 0;
            counts[type][dimension] = 0;
        }

        scores[type][dimension] += value;
        counts[type][dimension] += 1;
    });

    // Normalize to 0-100
    Object.keys(scores).forEach(type => {
        Object.keys(scores[type]).forEach(dim => {
            const raw = scores[type][dim];
            const count = counts[type][dim];
            const maxPossible = count * 5; // 5 is max Likert
            const minPossible = count * 1;

            scores[type][dim] = Math.round(((raw - minPossible) / (maxPossible - minPossible)) * 100);
        });
    });

    return scores;
};

export const matchCareers = (userScores: AssessmentResult, careers: any[]) => {
    return careers.map(career => {
        let totalScore = 0;
        let totalWeight = 0;

        // Match Personality (Big Five)
        Object.keys(career.personalityWeights).forEach(dim => {
            const userScore = userScores.personality[dim] || 0;
            const weight = career.personalityWeights[dim];
            // Simple similarity score: 100 - abs(diff)
            const diff = Math.abs(userScore - weight);
            totalScore += (100 - diff) * 0.4; // Weighted 40%
            totalWeight += 0.4;
        });

        // Match Interest (RIASEC)
        Object.keys(career.interestWeights).forEach(dim => {
            const userScore = userScores.interest[dim] || 0;
            const weight = career.interestWeights[dim];
            const diff = Math.abs(userScore - weight);
            totalScore += (100 - diff) * 0.4; // Weighted 40%
            totalWeight += 0.4;
        });

        // Match Aptitude
        Object.keys(career.aptitudeRequired).forEach(dim => {
            const userScore = userScores.aptitude[dim] || 0;
            const weight = career.aptitudeRequired[dim];
            // For aptitude, user score SHOULD be >= weight
            const diff = userScore >= weight ? 0 : weight - userScore;
            totalScore += (100 - diff) * 0.2; // Weighted 20%
            totalWeight += 0.2;
        });

        return {
            careerId: career._id,
            name: career.name,
            slug: career.slug,
            score: Math.round(totalScore / totalWeight),
            explanation: generateExplanation(userScores, career)
        };
    }).sort((a, b) => b.score - a.score);
};

const generateExplanation = (userScores: any, career: any) => {
    // Simple logic for explanation - in a real app, this could use AI
    const matches = [];
    if (userScores.personality.openness > 70 && career.personalityWeights.openness > 70) {
        matches.push("Your high openness matches the creative nature of this field.");
    }
    if (userScores.interest.investigative > 70 && career.interestWeights.investigative > 70) {
        matches.push("Your analytical interests align perfectly with the daily tasks of a " + career.name + ".");
    }
    return matches.join(" ") || "Your overall profile shows a strong compatibility with this career path.";
};
