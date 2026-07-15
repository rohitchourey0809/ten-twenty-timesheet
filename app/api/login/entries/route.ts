import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    success: true,
    data: [
      {
        id: 1,
        project: 'Tentwenty Dashboard',
        task: 'Create Login UI',
        hours: 8,
      },
      {
        id: 2,
        project: 'Tentwenty Dashboard',
        task: 'Dashboard Table',
        hours: 6,
      },
    ],
  });
}
