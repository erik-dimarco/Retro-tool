/*
  Warnings:

  - A unique constraint covering the columns `[provider,providerAccountId]` on the table `Account` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Account_id_provider_providerAccountId_key";

-- DropIndex
DROP INDEX "Session_id_key";

-- DropIndex
DROP INDEX "User_id_key";

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");
