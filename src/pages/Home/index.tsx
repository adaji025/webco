import { Fragment } from "react/jsx-runtime";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AOS from "aos";

import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div className="home-banner min-h-[70vh] md:min-h-screen w-full flex items-center mt-[65px]">
        <div className="flex justify-center w-full">
          <div
            className="max-w-[800px] mx-auto px-5 lg:px-12 text-white z-10 text-center"
            data-aos="zoom-in"
          >
            <h2 className="font-bold text-[32px] md:text-[44px] lg:text-[64px] text-center">
              AN ADVOCATE OF ​GREEN ECONOMY IN ​NIGERIA
            </h2>
            <div className="mt-3 font-medium text-3xl">
              Committed to Environmental Sustainability
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;
