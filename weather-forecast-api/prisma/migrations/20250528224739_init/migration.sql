-- CreateTable
CREATE TABLE "Weather" (
    "id" SERIAL NOT NULL,
    "locationName" TEXT NOT NULL,
    "humidity" INTEGER NOT NULL,
    "conditionIcon" TEXT NOT NULL,
    "temperature" INTEGER NOT NULL,

    CONSTRAINT "Weather_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Weather_locationName_key" ON "Weather"("locationName");
