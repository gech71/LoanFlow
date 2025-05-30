/*
  Warnings:

  - You are about to drop the column `stage` on the `LoanHistoryEntry` table. All the data in the column will be lost.
  - You are about to drop the column `currentStage` on the `LoanRequest` table. All the data in the column will be lost.
  - You are about to alter the column `loanAmount` on the `LoanRequest` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(18,2)`.
  - You are about to drop the column `loanStageName` on the `StageConfig` table. All the data in the column will be lost.
  - You are about to drop the column `targetRoleForStage` on the `StageConfig` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `LoanDocument` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `LoanRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `RequiredDocumentConfig` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `StageConfig` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LoanDocument" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "uploadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "LoanHistoryEntry" DROP COLUMN "stage",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "ipAddress" INET,
ADD COLUMN     "stageId" TEXT;

-- AlterTable
ALTER TABLE "LoanRequest" DROP COLUMN "currentStage",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "currentStageId" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "loanAmount" SET DATA TYPE DECIMAL(18,2);

-- AlterTable
ALTER TABLE "RequiredDocumentConfig" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isMandatory" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "StageConfig" DROP COLUMN "loanStageName",
DROP COLUMN "targetRoleForStage",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "loanStageId" TEXT,
ADD COLUMN     "targetRoleId" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "role",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "roleId" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Role" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LoanStage" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "order" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LoanStage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "LoanStage_name_key" ON "LoanStage"("name");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LoanRequest" ADD CONSTRAINT "LoanRequest_currentStageId_fkey" FOREIGN KEY ("currentStageId") REFERENCES "LoanStage"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LoanHistoryEntry" ADD CONSTRAINT "LoanHistoryEntry_stageId_fkey" FOREIGN KEY ("stageId") REFERENCES "LoanStage"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StageConfig" ADD CONSTRAINT "StageConfig_loanStageId_fkey" FOREIGN KEY ("loanStageId") REFERENCES "LoanStage"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StageConfig" ADD CONSTRAINT "StageConfig_targetRoleId_fkey" FOREIGN KEY ("targetRoleId") REFERENCES "Role"("id") ON DELETE SET NULL ON UPDATE CASCADE;
