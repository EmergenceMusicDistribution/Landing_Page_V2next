/*
  Warnings:

  - Made the column `phonenUmber` on table `EmdArtist` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phonenUmber` on table `NewArtist` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "EmdArtist" ALTER COLUMN "phonenUmber" SET NOT NULL;

-- AlterTable
ALTER TABLE "NewArtist" ALTER COLUMN "phonenUmber" SET NOT NULL;
