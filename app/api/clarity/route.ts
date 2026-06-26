import { NextResponse } from 'next/server';

// Strictly cache this API route for 4 hours to respect the 10 calls/day limit.
export const revalidate = 14400;

export async function GET() {
  const token = process.env.CLARITY_EXPORT_TOKEN;

  if (!token) {
    return NextResponse.json({ error: 'Missing CLARITY_EXPORT_TOKEN environment variable' }, { status: 500 });
  }

  try {
    const response = await fetch('https://www.clarity.ms/export-data/api/v1/project-live-insights', {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      // Double enforce the caching at the fetch level
      next: { revalidate: 14400 }
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Clarity API Error:", errorText);
      return NextResponse.json({ error: 'Failed to fetch from Clarity', status: response.status }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Clarity API Exception:", error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
