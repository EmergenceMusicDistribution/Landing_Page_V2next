import Head from "next/head";
import Layout from "@/components/layout/RootLayout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <link rel="icon" href="/sitelogo.svg" />
      </Head>
  <Layout>
    <Component {...pageProps} />
  </Layout>
    </>
  )
}
