import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db'; // Adjust if your prisma client is in a different path

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    // Validate required fields (basic check)
    if (!data.customerName || !data.customerEmail || !data.customerPhone || !data.loanAmount || !data.loanType || !data.loanPurpose) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }
    
    const currentDate = new Date();
    
    // Get default stage
    const defaultStage = await prisma.loanStage.findFirst({where: { order: 1 }});
    

    const newLoan = await prisma.loanRequest.create({
      data: {
        customerName: data.customerName,
        customerEmail: data.customerEmail,
        customerPhone: data.customerPhone,
        loanAmount: data.loanAmount,
        loanType: data.loanType,
        loanPurpose: data.loanPurpose,
        loanNumber: `LN-${String(Date.now()).slice(-5)}`,
        customerNumber: `CUST-${String(Date.now()).slice(-4)}`,
        submittedDate: currentDate,
        lastUpdatedDate: currentDate,
        currentStageId: defaultStage?.id,
        isOverdue: false,
        isReadyForManagerReview: false,
        history: {
          create: {
            stageId: defaultStage?.id,
            timestamp: currentDate,
            userName: 'System',
            notes: 'Loan application submitted. Initially unassigned.',
          }
        }
      }
    });
    return NextResponse.json({ id: newLoan.id }, { status: 201 });
  } catch (error: any) {
    console.error('API error:', error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const loans = await prisma.loanRequest.findMany({
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
      },
      orderBy: { lastUpdatedDate: 'desc' }
    });

    // Calculate isOverdue for each loan
    const processedLoans = loans.map(loan => {
      const isOverdue = loan.stageDeadline ? 
        loan.stageDeadline.getTime() < new Date().getTime() && 
        loan.currentStage?.name !== 'FUNDS_DISBURSED' && 
        loan.currentStage?.name !== 'REJECTED' : 
        false;

      return { ...loan, isOverdue };
    });

    return NextResponse.json({ loans: processedLoans });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to fetch loans: " + error.message },
      { status: 500 }
    );
  }
}
