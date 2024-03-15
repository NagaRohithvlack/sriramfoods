import { motion } from "framer-motion";
import firstImg from "../../../../assets/images/first-1.png";
import FallingDotsComponent from "./SingleDot";
import { MovingDotsRightComp } from "./SingleDot";
import curleyDesign from "../../../../assets/images/curely-design.png";
export default function ExperienceSairam() {
  return (
    <div className="flex flex-col h-screen justify-center items-center relative  sm:flex-row">
      <div className="sm:w-2/6 flex justify-center items-center ">
        <div className="absolute left-14 top-14">
          <MovingDotsRightComp />
        </div>
        <div>
          <img src={firstImg} className="h-4/6" alt="firstImg" />
        </div>
      </div>
      <div className="sm:w-3/6  h-full flex justify-between items-center ">
        <div className="absolute right-10 bottom-[120px]">
          <FallingDotsComponent />
        </div>
        <motion.div
          animate={{ rotate: 90 }}
          transition={{ duration: 1 }}
          className="w-2/6 m-0 p-0"
        >
          <img className="hidden sm:block" src={curleyDesign} alt="curely" />
        </motion.div>
        <h1 className="text-3xl text-[#4A2E1F]">
          Experience SaiRam’s Delectable Ensemble. Savor the Taste of Authentic
          India.
        </h1>
      </div>
    </div>
  );
}
