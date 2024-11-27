import React, { useRef, useEffect } from "react";
  import { motion } from "framer-motion";

const SingleBrand = ({ brand }) => {
  const { image, href, name, imageLight, id } = brand;

  return (
    <>
      <motion.a
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: id }}
        viewport={{ once: true }}
        href={href}
        className="animate_top mx-w-full relative block h-10 w-[98px] "
      >
        <img
          className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden -mt-8 rounded-full "
          src={image}
          alt={name}
          fill
        />
        <img
          className="lg:ml-[450px] ml-6 hidden opacity-50 transition-all duration-300 hover:opacity-100 dark:block -mt-8 rounded-full "
          src={imageLight}
          alt={name}
          fill
        />
      </motion.a>
    </>
  );
};

export default SingleBrand;
