import dbConnect from '../lib/dbConnect.ts';
import Career from '../models/Career.ts';

const sampleCareers = [
    {
        name: 'Data Scientist',
        slug: 'data-scientist',
        category: 'Technology',
        shortDescription: 'Analyze complex data to help organizations make better decisions.',
        detailedDescription: 'Data scientists use analytical, statistical, and programming skills to collect, analyze, and interpret large data sets. They then use this information to develop data-driven solutions to difficult business challenges.',
        personalityWeights: {
            openness: 80,
            conscientiousness: 90,
            extraversion: 40,
            agreeableness: 50,
            neuroticism: 30
        },
        interestWeights: {
            investigative: 95,
            realistic: 40,
            artistic: 30,
            social: 40,
            enterprising: 60,
            conventional: 70
        },
        aptitudeRequired: {
            numerical: 90,
            verbal: 70,
            logical: 95,
            spatial: 50
        },
        skills: ['Python', 'R', 'SQL', 'Machine Learning', 'Statistics'],
        salaryRange: { entry: 600000, mid: 1500000, senior: 3500000 },
        growthOutlook: 95,
        difficultyIndex: 8
    },
    {
        name: 'User Experience (UX) Designer',
        slug: 'ux-designer',
        category: 'Design',
        shortDescription: 'Design digital products that provide meaningful and relevant experiences to users.',
        detailedDescription: 'UX designers focus on the interaction between real-human users and everyday products and services, such as websites, apps, and even coffee machines.',
        personalityWeights: {
            openness: 90,
            conscientiousness: 70,
            extraversion: 60,
            agreeableness: 80,
            neuroticism: 40
        },
        interestWeights: {
            artistic: 90,
            investigative: 70,
            social: 75,
            enterprising: 50,
            realistic: 30,
            conventional: 40
        },
        aptitudeRequired: {
            numerical: 40,
            verbal: 80,
            logical: 75,
            spatial: 90
        },
        skills: ['Figma', 'User Research', 'Prototyping', 'Wireframing'],
        salaryRange: { entry: 500000, mid: 1200000, senior: 2800000 },
        growthOutlook: 85,
        difficultyIndex: 6
    }
];

async function seed() {
    await dbConnect();
    await Career.deleteMany({});
    await Career.insertMany(sampleCareers);
    console.log('Database seeded with sample careers!');
    process.exit(0);
}

seed().catch(err => {
    console.error(err);
    process.exit(1);
});
