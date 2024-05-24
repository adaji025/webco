import { Fragment } from "react/jsx-runtime";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AOS from "aos";
import { MdOutlineEmail } from "react-icons/md";
import PartnersLogo from "../../assets/partners-logo.svg";

import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div className="section1 min-h-screen w-full flex items-center mt-[65px]">
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

      <div className="abuja min-h-screen py-16 flex flex-col sm:items-end mx-auto px-5 lg:px-12">
        <h2 className="text-[40px] md:text-[84px] lg:text-[108px] font-bold sm:font-black">
          Our Projects
        </h2>
        <div className="grid gap-5 place-items-end mt-5 w-full">
          <div className="w-full md:w-2/3 p-3 sm:p-5 md:p-7 border-8 border-gray-600 rounded-full flex items-center justify-between">
            <div className="font-bold sm:text-2xl lg:text-4xl">
              Carbon Emission Reduction
            </div>
            <div className="text-sm md:text-xl lg:text-2xl">Read More</div>
          </div>
          <div className="w-full md:w-2/3 p-3 sm:p-5 md:p-7 border-8 border-gray-600 rounded-full flex items-center justify-between">
            <div className="font-bold sm:text-2xl lg:text-4xl">
              Carbon Emission Reduction
            </div>
            <div className="text-sm md:text-xl lg:text-2xl">Read More</div>
          </div>
          <div className="w-full md:w-2/3 p-3 sm:p-5 md:p-7 border-8 border-gray-600 rounded-full flex items-center justify-between">
            <div className="font-bold sm:text-2xl lg:text-4xl">
              Carbon Emission Reduction
            </div>
            <div className="text-sm md:text-xl lg:text-2xl">Read More</div>
          </div>
        </div>
      </div>

      <div className="woman min-h-screen text-white mx-auto px-5 py-10">
        <h2 className="text-[40px] lg:text-[64px]  font-bold sm:font-black mt-10">
          Get In Touch
        </h2>
        <div className="grid gap-5 mt-5">
          <div className="flex items-center gap-5 md:gap-10 text-xl sm:text-2xl md:text-4xl">
            <div className="font-extrabold">Phone</div>
            <div>(+234) 916 000 2080</div>
          </div>
          <div className="flex items-center gap-5 md:gap-10 text-xl sm:text-2xl md:text-4xl">
            <div className="font-extrabold">Email</div>
            <div>info@ecoistafrica.com</div>
          </div>
          <div className="flex items-center gap-5 md:gap-10 text-xl sm:text-2xl md:text-4xl">
            <div className="font-extrabold">Address</div>
            <div>Ikeja, Lagos, Nigeria</div>
          </div>
        </div>
        <div className="mt-10 p-10 rounded-2xl bg-white text-black w-max flex items-center gap-10">
          <MdOutlineEmail size={40} />
          <h2 className="sm:text-[40px] font-bold">Contact Us</h2>
        </div>
      </div>
      <div className="">
        <img src={PartnersLogo} alt="" className="" />
      </div>

      <div className="video-5 h-screen text-white">
        <div className="pt-20 lg:w-[70%] lg:ml-auto">
          <div className="bg-black/50 p-5 w-max font-bold sm:text-4xl lg:text-[56px] rounded-xl">
            Carbon Emission Reduction
          </div>
          <div className="bg-black/50 p-5 rounded-xl">
            We are implementing carbon emission project through advanced
            technologies ans sustainable practices. Our efforts are aimed at
            decreasing carbon footprints significally aligning with global
            climate change mitigation goal
          </div>
        </div>
      </div>

      <div className="video-6 h-screen text-white">
        <div className="pt-20 lg:w-[70%] lg:ml-auto">
          <div className="bg-black/50 p-5 w-max font-bold sm:text-4xl lg:text-[56px] rounded-xl">
            Carbon Emission Reduction
          </div>
          <div className="bg-black/50 p-5 rounded-xl">
            We are implementing carbon emission project through advanced
            technologies ans sustainable practices. Our efforts are aimed at
            decreasing carbon footprints significally aligning with global
            climate change mitigation goal
          </div>
        </div>
      </div>

      <div className="video-7 h-screen flex flex-col justify-center text-white">
        <div className="lg:w-[70%] lg:ml-auto">
          <div className="bg-black/50 p-5 w-max font-bold sm:text-4xl lg:text-[56px] rounded-xl">
            Carbon Emission Reduction
          </div>
          <div className="bg-black/50 p-5 rounded-xl">
            We are implementing carbon emission project through advanced
            technologies ans sustainable practices. Our efforts are aimed at
            decreasing carbon footprints significally aligning with global
            climate change mitigation goal
          </div>
        </div>
      </div>

      <div className="video-8 h-screen flex flex-col justify-center text-white px-10">
        <div className="lg:w-[50%] lg:ml-auto">
          <div className="bg-black/50 p-5 w-max font-bold sm:text-4xl lg:text-[56px] rounded-xl">
            Water Filteration
          </div>
          <div className="bg-black/50 p-5 rounded-xl">
            Our cutting-edge water Filteration system ustilizes advanced
            technologies to efficiently remove impurities ensuring clean and
            safe drinking water
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;
