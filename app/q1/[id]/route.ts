import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import QRScanLog from '@/models/QRScanLog';
import { headers } from 'next/headers';

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        await dbConnect();
        const id = params.id;
        const headerList = await headers();
        const userAgent = headerList.get('user-agent') || 'unknown';
        const forwarded = headerList.get('x-forwarded-for');
        const ip = forwarded ? forwarded.split(',')[0] : 'unknown';

        // Log the scan
        await QRScanLog.create({
            campaignId: id,
            ip,
            userAgent,
            timestamp: new Date()
        });

        // Redirect to the main landing page or a specific campaign page
        return NextResponse.redirect(new URL(`/?utm_source=qr&utm_campaign=${id}`, request.url));
    } catch (error) {
        console.error('QR tracking error:', error);
        return NextResponse.redirect(new URL('/', request.url));
    }
}
