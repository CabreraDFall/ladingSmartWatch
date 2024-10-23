import Featered from "../components/Featered";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Icons from "../components/Icons";
import Oferts from "../components/Oferts";

function Home() {
  return (
    <div className="wrapper xl:w-[1440px]">
      <Header />
      <Hero />
      <Icons />
      <Featered />
      <Oferts />
      <Footer />
    </div>
  );
}

export default Home;
