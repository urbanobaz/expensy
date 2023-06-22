-- CreateTable
CREATE TABLE "Income" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "client" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Income_pkey" PRIMARY KEY ("id")
);
