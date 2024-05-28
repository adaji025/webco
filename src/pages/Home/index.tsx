import { Fragment } from "react/jsx-runtime";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AOS from "aos";
import { MdOutlineEmail } from "react-icons/md";
import PartnersLogo from "../../assets/partners-logo.svg";

import { useEffect } from "react";
import Team from "../../components/Team";
import Slider from "../../components/Slider"; 
import Newsletter from "../../components/Newsletter"; 

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
            Pet Recycling
          </div>
          <div className="bg-black/50 p-5 rounded-xl">
            We safeguard our environment, by prioritizing the principle of 3R's
            : (Reduce, Reuse and Recycle). We commit to the circular economy, by
            preventing recyclable plastics from entering landfalls and polluting
            the environment.
          </div>
        </div>
      </div>

      <div className="video-7 pt-10 h-screen text-white lg:pt-20">
        <div className="lg:w-[90%] lg:m-auto">
          <div className="bg-black/50 p-5 w-100 font-bold text-center sm:text-4xl lg:text-[56px] rounded-xl ">
            Fuel Efficient Stove: Easy Stove - F1 Model
          </div>
          {/* <div className="bg-black/50 p-5 rounded-xl">
            We are implementing carbon emission project through advanced
            technologies and sustainable practices. Our efforts are aimed at
            decreasing carbon footprints significally, aligning with global
            climate change mitigation goal.
          </div> */}
        </div>
      </div>

      <div className="video-8 h-screen flex flex-col justify-center text-white px-10">
        <div className="lg:w-[50%] lg:ml-auto">
          <div className="bg-black/50 p-5 w-max font-bold sm:text-4xl lg:text-[56px] rounded-xl">
            Water Filteration
          </div>
          <div className="bg-black/50 p-5 rounded-xl">
            Our cutting-edge water Filteration system utilizes advanced
            technologies to efficiently remove impurities, ensuring clean and
            safe drinking water
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1 bg-white p-10">
            <h2 className="text-xl text-center font-bold font-sans mb-4 sm:text-4xl lg:text-[56px]">
              Our Vision
            </h2>
            <p className="text-xl font-sans">
              We, at Ecoist aim to become recognised as a leading ​advocate of
              “Green Economy” in Nigeria, where humanity ​and nature is valued
              and protected by everyone.
            </p>
          </div>
          <div className="flex-1 bg-white p-10">
            <h2 className="text-xl text-center font-bold font-sans mb-4 sm:text-4xl lg:text-[56px]">
              Our Mission
            </h2>
            <p className="text-xl font-sans ">
              We are focused on climate-neutral business ​opportunities that
              promote action for “Greener ​Future” in collaboration with
              individuals mainly ​women, communities, voluntary organisations,
              ​businesses, local authorities, and government ​agencies.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1 bg-white p-10">
            <h2 className="text-xl text-center font-bold font-sans mb-4 sm:text-4xl lg:text-[56px]">
              Objectives
            </h2>
            <ul className="list-disc list-inside text-xl font-sans">
              <li>
                To reducing greenhouse gas emissions and foster a ​green economy
              </li>
              <li>
                To focusing on climate-neutral business opportunities ​that
                promote action for “Greener Future”
              </li>
              <li>
                To collaborating with individuals mainly women, ​communities,
                voluntary organisations, businesses, ​local authorities, and
                government agencies.
              </li>
              <li>
                To accelerating the process of decarbonising the ​environment by
                prioritizing integrity throughout our ​projects
              </li>
            </ul>
          </div>

          <div className="flex-1 bg-white p-10">
            <h2 className="text-xl text-center font-bold font-sans mb-4 sm:text-4xl lg:text-[56px]">
              Core values
            </h2>
            <ul className="text-xl font-sans">
              <li>
                <span className="text-ub">E</span>nvironmental Preservation
              </li>
              <li>
                <span className="text-ub">C</span>ommitment to Fight Climate
                Change
              </li>
              <li>
                <span className="text-ub">O</span>pportunities for the Local
                Community
              </li>
              <li>
                <span className="text-ub">I</span>ntegrity in our Work
              </li>
              <li>
                <span className="text-ub">S</span>ustainable Future
              </li>
              <li>
                <span className="text-ub">T</span>ogether We Can Make a
                Difference
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Team /> 
      <Slider /> 
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

export default Home;
