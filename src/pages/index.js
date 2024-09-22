import Head from "next/head";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import LastSection from "@/components/LastSection";
import PlatformsSection from "@/components/PlatformsSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {

  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Emergence Music Distribution",
    "url": "https://emergencemusiclandingv2.vercel.app/",
    // "potentialAction": {
    //   "@type": "SearchAction",
    //   "target": "https://https://emergencemusiclandingv2.vercel.app/search?q={search_term_string}",
    //   "query-input": "required name=search_term_string"
    // }
  };

  return (
    < >
    <Head>
      <title>Emergence Music Distribution: Top Music Distribution Company</title>
      <meta name="description" content="Distribute your music to major streaming platforms like Spotify & Apple Music. Expand your audience and boost revenue with Emergence Music Distribution." />
      <meta name="robots" content="index, follow" /> 
      <link rel="canonical" href="https://emergencemusicdistributionlandingpagev2.vercel.app" />
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homeStructuredData) }}
        />
    </Head>
      <HeroSection/>
      <PlatformsSection/>
      <ServicesSection/>
      <FeaturesSection/>
      <LastSection/>
    </>
  )
}
