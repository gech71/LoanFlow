// app/api/loan-stages/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET() {
  try {
    const stages = await prisma.loanStage.findMany({
      orderBy: { order: 'asc' }
    });
    return NextResponse.json(stages);
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to fetch loan stages: " + error.message },
      { status: 500 }
    );
  }
}