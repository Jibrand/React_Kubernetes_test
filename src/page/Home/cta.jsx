import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <>
      {/* <!-- ===== CTA Start ===== --> */}
      <section className="overflow-hidden px-4 py-20 md:px-8 lg:py-25 xl:py-30 2xl:px-0">
        <div className="mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#0B0C10] to-[#1F2833] px-7.5 py-12.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark md:px-12.5 xl:px-17.5 xl:py-0">
          <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center md:justify-between md:gap-0">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-[70%] lg:w-1/2"
            >
              <h2 className="mb-4 w-11/12 text-3xl font-bold text-white dark:text-gray-400 xl:text-sectiontitle4">
                Unlock Your AWS Security Skills with Us Today!
              </h2>
              <p className="text-gray-300">
                Dive into the world of cloud security with our hands-on CTF challenges designed specifically for AWS testing. Enhance your skills, challenge yourself, and become a pro in securing cloud environments.
              </p>
              <Link
                to="/register"
                className="inline-flex mt-4 items-center gap-2.5 rounded-full bg-pink-500 px-6 py-3 font-medium text-white hover:bg-pink-600 dark:bg-pink-600 dark:text-white"
              >
                Sign Up for Free
                <img
                  src="/images/icon/icon-arrow-dark.svg"
                  alt="Arrow"
                  className="dark:hidden"
                />
                <img
                  src="/images/icon/icon-arrow-light.svg"
                  alt="Arrow"
                  className="hidden dark:block"
                />
              </Link>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right lg:w-[45%]"
            >
              <div className="flex items-center justify-end xl:justify-between">
                <img
                  src="/images/shape/shape-06.png"
                  alt="Saly"
                  className="hidden xl:block"
                />


              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== CTA End ===== */}
    </>
  );
};

export default CTA;