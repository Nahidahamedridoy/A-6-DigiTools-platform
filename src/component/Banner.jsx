import { FaRegCircleDot } from "react-icons/fa6";
import BannerImage from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="relative min-h-162.5 flex items-center overflow-hidden mt-20">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#E1E7FF] border border-[#4F39F6] text-[#4F39F6] text-sm font-medium px-5 py-2 rounded-full">
            <FaRegCircleDot /> New: AI-Powered Tools Available      
          </div>

          <h1 className="text-6xl lg:text-5xl font-bold leading-tight tracking-tighter ">
            Supercharge Your <br />
            Digital Workflow
            <br />
          </h1>

          <p className="text-lg text-[#627382] max-w-lg">
            Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today.
Explore Products
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] transition-all px-5 py-3 rounded-full font-semibold text-lg shadow-xl  flex items-center gap-3 group text-white">
              Explore Products
            </button>
            <button className="btn btn-outline  px-5 py-6 rounded-full font-semibold text-lg shadow-xl  flex items-center gap-3 group text-[#4F39F6]"><img src="/src/assets/Play.png" alt="" />Watch Demo</button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl "
              src={BannerImage}
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};




export default Banner;