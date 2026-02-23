import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import AssessmentSession from '@/models/AssessmentSession';
import Question from '@/models/Question';
import Career from '@/models/Career';
import { calculateScores, matchCareers } from '@/lib/scoringEngine';

export async function POST(request: Request) {
    try {
        await dbConnect();
        const { userId, type, responses } = await request.json();

        const questions = await Question.find({ active: true });
        const careers = await Career.find({ active: true });

        // 1. Calculate Scores
        const scores = calculateScores(responses, questions);

        // 2. Match Careers
        const matches = matchCareers(scores, careers);

        // 3. Save Session
        const session = await AssessmentSession.create({
            userId,
            type,
            status: 'completed',
            responses,
            scores,
            careerMatches: matches.slice(0, 10), // Top 10
            endTime: new Date()
        });

        return NextResponse.json({
            sessionId: session._id,
            scores,
            topMatches: matches.slice(0, 5)
        });
    } catch (error) {
        console.error('Assessment submission error:', error);
        return NextResponse.json({ error: 'Failed to process assessment' }, { status: 500 });
    }
}
