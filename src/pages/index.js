import Head from "next/head";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import LastSection from "@/components/LastSection";
import PlatformsSection from "@/components/PlatformsSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    < >
    <Head>
      <title>Emergence Music Distribution: Top Music Distribution Company</title>
      <meta name="description" content="Distribute your music to major streaming platforms like Spotify & Apple Music. Expand your audience and boost revenue with Emergence Music Distribution.." />
      <link rel="canonical" href="https://emergencemusicdistributionlandingpagev2.vercel.app" />
    </Head>
      <HeroSection/>
      <PlatformsSection/>
      <ServicesSection/>
      <FeaturesSection/>
      <LastSection/>
    </>
  )
}
