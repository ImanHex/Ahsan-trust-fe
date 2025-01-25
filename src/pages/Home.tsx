import Store from "../pages/Products";
import CTA from "../pages/CTA";
import Navbar from "components/common/Navbar";
import Footer from "components/common/Footer";
import Header from "components/common/Header";
import AhsanTrustNews from "pages/AhsanTrustNews";

function HomePage() {
  return (
    <>
      <Navbar />
      <Header />
      <Store />
      <AhsanTrustNews />
      <CTA />
      <Footer />
    </>
  );
}

export default HomePage;
