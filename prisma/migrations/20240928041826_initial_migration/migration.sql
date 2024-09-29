-- CreateTable
CREATE TABLE "NewArtist" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "dateOfBirth" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phonenUmber" VARCHAR(20),
    "language" TEXT NOT NULL,
    "artistName" TEXT NOT NULL,
    "musicGenre" TEXT NOT NULL,
    "spotifyLink" TEXT NOT NULL,
    "instagramLink" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "NewArtist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmdArtist" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phonenUmber" VARCHAR(20),
    "artistName" TEXT NOT NULL,
    "musicGenre" TEXT NOT NULL,
    "spotifyLink" TEXT NOT NULL,
    "instagramLink" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EmdArtist_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "NewArtist_email_key" ON "NewArtist"("email");

-- CreateIndex
CREATE UNIQUE INDEX "EmdArtist_email_key" ON "EmdArtist"("email");
