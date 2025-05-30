import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const withLoans = req.nextUrl.searchParams.get("withLoans");
    if (withLoans) {
      // Get all stages with their associated loans, ordered
      const stages = await prisma.loanStage.findMany({
        orderBy: { order: "asc" },
        include: {
          loanRequests: {
            orderBy: { submittedDate: "asc" },
            include: {
              assignedTo: true,
              documents: true,
              history: {
                include: { user: true },
                orderBy: { timestamp: "desc" },
              },
            },
          },
        },
      });
      // Rename loanRequests to loans for frontend compatibility
      const result = stages.map((stage) => ({
        ...stage,
        loans: stage.loanRequests,
        loanRequests: undefined,
      }));
      return NextResponse.json({ stages: result });
    } else {
      // Just return stages
      const stages = await prisma.loanStage.findMany({ orderBy: { order: "asc" } });
      return NextResponse.json({ stages });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}
