// app/api/loans-requests/[id]/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params; //
  const data = await request.json();

  try {
    const updatedLoan = await prisma.loanRequest.update({
      where: { id },
      data: {
        ...data,
        lastUpdatedDate: new Date()
      },
      include: {
        currentStage: true,
        assignedTo: true,
        documents: true,
        history: {
          include: {
            stage: true,
            user: true
          },
          orderBy: { timestamp: 'desc' }
        }
      }
    });

    return NextResponse.json(updatedLoan);
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to update loan: " + error.message },
      { status: 500 }
    );
  }
}