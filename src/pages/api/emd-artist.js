import prisma from '../../../lib/prisma'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const {
      firstName,
      lastName,
      location,
      email,
      phoneNumber,
      artistName,
      musicGenre,
      spotifyLink,
      instagramLink
    } = req.body
   
    const emdArtist = await prisma.emdArtist.create({
      data: {
        firstName,
        lastName,
        location,
        email,
        phoneNumber,
        artistName,
        musicGenre,
        spotifyLink,
        instagramLink
      }
    })

    
    res.status(201).json(emdArtist)
  } catch (error) {
    if (error.code === 'P2002' && error.meta && error.meta.target.includes('email')) {
    res.status(400).json({ error: 'Email already exists' });
   }
   else{
    console.log(error)
     res.status(500).json({ error: 'Error creating artist', details: error.message })
   }

  }
}