import dbConnect from '../lib/dbConnect.ts';
import Question from '../models/Question.ts';

const questions = [
    // Personality - Big Five
    {
        text: "I enjoy being the life of the party.",
        type: "personality",
        dimension: "extraversion",
        options: [
            { text: "Strongly Disagree", value: 1 },
            { text: "Disagree", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 4 },
            { text: "Strongly Agree", value: 5 }
        ]
    },
    {
        text: "I often forget to put things back in their proper place.",
        type: "personality",
        dimension: "conscientiousness",
        reverseScored: true,
        options: [
            { text: "Strongly Disagree", value: 1 },
            { text: "Disagree", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 4 },
            { text: "Strongly Agree", value: 5 }
        ]
    },
    {
        text: "I have a rich vocabulary.",
        type: "personality",
        dimension: "openness",
        options: [
            { text: "Strongly Disagree", value: 1 },
            { text: "Disagree", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 4 },
            { text: "Strongly Agree", value: 5 }
        ]
    },

    // Interest - RIASEC
    {
        text: "I like to work on cars or machinery.",
        type: "interest",
        dimension: "realistic",
        options: [
            { text: "Dislike", value: 1 },
            { text: "Slightly Dislike", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Like", value: 4 },
            { text: "Enjoy Very Much", value: 5 }
        ]
    },
    {
        text: "I enjoy solving complex math problems.",
        type: "interest",
        dimension: "investigative",
        options: [
            { text: "Dislike", value: 1 },
            { text: "Slightly Dislike", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Like", value: 4 },
            { text: "Enjoy Very Much", value: 5 }
        ]
    }
];

async function seed() {
    await dbConnect();
    await Question.deleteMany({});
    await Question.insertMany(questions);
    console.log('Database seeded with psychometric questions!');
    process.exit(0);
}

seed().catch(err => {
    console.error(err);
    process.exit(1);
});
