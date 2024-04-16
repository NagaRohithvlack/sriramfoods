import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "popmotion";

const Carousel = ({ components }: any) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const index = wrap(0, components.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="relative w-full  h-64 overflow-hidden mx-auto my-8">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          className="absolute w-full h-full flex justify-center items-center text-white text-2xl"
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 1 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(_e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          {React.createElement(components[index])}
        </motion.div>
      </AnimatePresence>
      <div
        className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer p-2 bg-gray-300 z-20"
        onClick={() => paginate(1)}
      >
        Next
      </div>
      <div
        className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer p-2 bg-gray-300 z-20"
        onClick={() => paginate(-1)}
      >
        Previous
      </div>
    </div>
  );
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

export default Carousel;
