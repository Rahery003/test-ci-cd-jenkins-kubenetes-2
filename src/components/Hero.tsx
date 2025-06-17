import Amazon from "../../public/images/amazon.png";
import Flipkart from "../../public/images/flipkart.png";
import HeroImage from "../../public/images/hero-image.png";
import { motion } from "motion/react";
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  return (
    <div className="w-full flex justify-between items-center px-32 py-10">
      <motion.div className="flex flex-col w-1/2"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.5
        }}
      >
        {/* <h1 className="uppercase font-extrabold text-7xl" >
          your feet deserve the best
        </h1> */}
        <h1 className="uppercase font-extrabold text-7xl" >
          <Typewriter
              words={['Welcome', 'Hello']}
              loop={1000} // 1 signifie que l'effet s'exécute une fois
              cursor
              cursorStyle="|"
              typeSpeed={200}
              deleteSpeed={50}
              delaySpeed={1000}
          />
        </h1>

        <p className="my-10 uppercase w-3/4 text-justify font-semibold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto quasi ratione ullam doloribus quo culpa autem natus assumenda, beatae omnis animi! Expedita corporis molestias vel.
        </p>

        <div className="flex justify-start items-center gap-4 mb-10">
          <button className="bg-indigo-600 px-4 py-2 font-bold text-gray-50 rounded-md transition hover:bg-indigo-800">Buy Now</button>
          <button className="px-4 py-2 font-bold text-white bg-orange-600 hover:bg-orange-700 rounded-md transition">Category</button> 
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-gray-900 capitalize">Also availaible On</p>
          <div className="flex justify-start items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => console.log('hover started!')}
            ><img src={Flipkart} alt="flipkart" /></motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => console.log('hover started!')}
            ><img src={Amazon} alt="amazon" /></motion.button>
          </div>
        </div>
      </motion.div>

      <motion.div className="w-1/2 box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1}}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
      >
        <img src={HeroImage} alt="Hero image" />
      </motion.div>
    </div>
  )
}