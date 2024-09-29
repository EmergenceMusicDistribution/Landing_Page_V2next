/*
  Warnings:

  - You are about to drop the column `phonenUmber` on the `EmdArtist` table. All the data in the column will be lost.
  - You are about to drop the column `phonenUmber` on the `NewArtist` table. All the data in the column will be lost.
  - Added the required column `phoneNumber` to the `EmdArtist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `NewArtist` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EmdArtist" DROP COLUMN "phonenUmber",
ADD COLUMN     "phoneNumber" VARCHAR(30) NOT NULL;

-- AlterTable
ALTER TABLE "NewArtist" DROP COLUMN "phonenUmber",
ADD COLUMN     "phoneNumber" VARCHAR(30) NOT NULL;
