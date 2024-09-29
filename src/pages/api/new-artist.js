import prisma from '../../../lib/prisma'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const {
      firstName,
      lastName,
      age,
      dateOfBirth,
      location,
      email,
      phoneNumber,
      language,
      artistName,
      musicGenre,
      spotifyLink,
      instagramLink
    } = req.body
   
    const newArtist = await prisma.newArtist.create({
      data: {
        firstName,
        lastName,
        age,
        dateOfBirth,
        location,
        email,
        phoneNumber,
        language,
        artistName,
        musicGenre,
        spotifyLink,
        instagramLink
      }
    })

    
    res.status(201).json(newArtist)
  } catch (error) {
    if (error.code === 'P2002' && error.meta && error.meta.target.includes('email')) {
    res.status(400).json({ error: 'Email already exists' });
   }
   else{
     res.status(500).json({ error: 'Error creating new artist', details: error.message })
   }

  }
}