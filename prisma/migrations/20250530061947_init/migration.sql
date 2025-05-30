-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LoanRequest" (
    "id" TEXT NOT NULL,
    "loanNumber" TEXT NOT NULL,
    "customerNumber" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "customerEmail" TEXT NOT NULL,
    "customerPhone" TEXT NOT NULL,
    "loanAmount" DECIMAL(65,30) NOT NULL,
    "loanType" TEXT NOT NULL,
    "loanPurpose" TEXT NOT NULL,
    "currentStage" TEXT NOT NULL,
    "submittedDate" TIMESTAMP(3) NOT NULL,
    "lastUpdatedDate" TIMESTAMP(3) NOT NULL,
    "assignedToId" TEXT,
    "stageDeadline" TIMESTAMP(3),
    "isOverdue" BOOLEAN NOT NULL,
    "isReadyForManagerReview" BOOLEAN NOT NULL,

    CONSTRAINT "LoanRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LoanDocument" (
    "id" TEXT NOT NULL,
    "loanRequestId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "notes" TEXT,

    CONSTRAINT "LoanDocument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LoanHistoryEntry" (
    "id" TEXT NOT NULL,
    "loanRequestId" TEXT NOT NULL,
    "stage" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,
    "userName" TEXT NOT NULL,
    "notes" TEXT,
    "requiredFulfilment" TEXT,

    CONSTRAINT "LoanHistoryEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StageConfig" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "loanStageName" TEXT NOT NULL,
    "defaultTimelineDays" INTEGER NOT NULL,
    "targetRoleForStage" TEXT NOT NULL,
    "percentageWeight" INTEGER NOT NULL,

    CONSTRAINT "StageConfig_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RequiredDocumentConfig" (
    "id" TEXT NOT NULL,
    "stageConfigId" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "RequiredDocumentConfig_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "LoanRequest_loanNumber_key" ON "LoanRequest"("loanNumber");

-- CreateIndex
CREATE UNIQUE INDEX "LoanRequest_customerNumber_key" ON "LoanRequest"("customerNumber");

-- AddForeignKey
ALTER TABLE "LoanRequest" ADD CONSTRAINT "LoanRequest_assignedToId_fkey" FOREIGN KEY ("assignedToId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LoanDocument" ADD CONSTRAINT "LoanDocument_loanRequestId_fkey" FOREIGN KEY ("loanRequestId") REFERENCES "LoanRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LoanHistoryEntry" ADD CONSTRAINT "LoanHistoryEntry_loanRequestId_fkey" FOREIGN KEY ("loanRequestId") REFERENCES "LoanRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LoanHistoryEntry" ADD CONSTRAINT "LoanHistoryEntry_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RequiredDocumentConfig" ADD CONSTRAINT "RequiredDocumentConfig_stageConfigId_fkey" FOREIGN KEY ("stageConfigId") REFERENCES "StageConfig"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
