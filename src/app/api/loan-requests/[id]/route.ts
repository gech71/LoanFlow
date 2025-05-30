import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db"; // Adjust if your prisma client is in a different path

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const data = await req.json();
    // Only allow updating certain fields for safety
    const allowedFields = ["currentStage", "assignedTo", "history", "isReadyForManagerReview", "lastUpdatedDate", "documents"];
    const updateData: Record<string, any> = {};
    for (const key of allowedFields) {
      if (key in data) updateData[key] = data[key];
    }
    const updatedLoan = await prisma.loanRequest.update({
      where: { id },
      data: updateData,
    });
    return NextResponse.json({ success: true, loan: updatedLoan });
  } catch (error: any) {
    console.error("PATCH /api/loan-requests/[id] error:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}
