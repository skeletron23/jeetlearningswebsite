import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Career from '@/models/Career';

export async function GET(request: Request) {
    try {
        await dbConnect();
        const { searchParams } = new URL(request.url);
        const category = searchParams.get('category');
        const search = searchParams.get('search');

        let query: any = { active: true };

        if (category && category !== 'All') {
            query.category = category;
        }

        if (search) {
            query.name = { $regex: search, $options: 'i' };
        }

        const careers = await Career.find(query).sort({ name: 1 });
        return NextResponse.json(careers);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch careers' }, { status: 500 });
    }
}
