// components/Layout.js
import Footer from "./Footer";
import Header from "./Header";
import Tab from "./Tab";



export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <Tab/>
    </>
  )
}