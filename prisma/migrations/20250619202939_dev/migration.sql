-- CreateEnum
CREATE TYPE "Plans" AS ENUM ('MAIN_STAGE', 'STARGAZER', 'FULL_ACCESS');

-- CreateTable
CREATE TABLE "GuestPurchase" (
    "id" TEXT NOT NULL,
    "plan" "Plans" NOT NULL,
    "guestEmail" TEXT NOT NULL,
    "guestName" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "paymentTotal" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GuestPurchase_pkey" PRIMARY KEY ("id")
);
