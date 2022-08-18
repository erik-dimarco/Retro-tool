/*
  Warnings:

  - You are about to drop the `Example` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[id,provider,providerAccountId]` on the table `Account` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Session` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Account_provider_providerAccountId_key";

-- DropTable
DROP TABLE "Example";

-- CreateIndex
CREATE UNIQUE INDEX "Account_id_provider_providerAccountId_key" ON "Account"("id", "provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_id_key" ON "Session"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
