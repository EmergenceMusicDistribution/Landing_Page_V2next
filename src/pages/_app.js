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
        <script type="application/ld+json"  dangerouslySetInnerHTML={{ __html: JSON.stringify(globalStructuredData) }} />
      </Head>
  <Layout>
    <Component {...pageProps} />
  </Layout>
    </>
  )
}
