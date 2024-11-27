import { NextResponse } from 'next/server';

export async function GET() {
    
    const apiKey = process.env.NEWS_API_KEY;
    const apiUrl = `https://newsapi.org/v2/everything?q=lego&apiKey=${apiKey}`;

    
    try {
        const res = await fetch(apiUrl);
        if (!res.ok) {
            return NextResponse.json({ error: 'Failed to fetch news' }, { status: res.status });
        }
        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}