import Head from "next/head";
import Layout from "@/components/layout/RootLayout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const globalStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Emergence Music Distribution",
    "url": "https://emergencemusiclandingv2.vercel.app/",
    // "logo": "https://www.yourmusicdistribution.com/logo.png",
    "sameAs": [
      "https://www.facebook.com/p/Emergence-Music-Distribution-100064302362140/",
      "https://x.com/emergence_music",
      "https://www.instagram.com/emergencemusicdistribution/",
      "https://www.tiktok.com/@emergencemusic?is_from_webapp=1&sender_device=pc",
      "www.youtube.com/@emergencemusicdistribution"
      // Add other social media profiles
    ]
  };
  return (
    <>
    <Head>
        <link rel="icon" href="/sitelogo.svg" />

        <meta property="og:title" content="Emergence Music Distribution" />
        <meta property="og:description" content="Distribute your music to major streaming platforms like Spotify & Apple Music. Expand your audience and boost revenue with Emergence Music Distribution." />
        <meta property="og:image" content="https://res.cloudinary.com/dz30u7oo2/image/upload/bg_wp0j1c.png" />
        <meta property="og:url" content="https://emergencemusiclandingv2.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Emergence Music Distribution" /> 

         {/* Twitter meta tags */}
         <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Emergence Music Distribution" />
        <meta name="twitter:description" content="Distribute your music to major streaming platforms like Spotify & Apple Music. Expand your audience and boost revenue with Emergence Music Distribution." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dz30u7oo2/image/upload/bg_wp0j1c.png" />


        <script type="application/ld+json"  dangerouslySetInnerHTML={{ __html: JSON.stringify(globalStructuredData) }} />
      </Head>
  <Layout>
    <Component {...pageProps} />
  </Layout>
    </>
  )
}
