import React from "react";
import { motion } from "framer-motion";

const FunFact = () => {
  return (
    <>
      {/* <!-- ===== Funfact Start ===== --> */}
      <section className="px-4 py-20 md:px-8 lg:py-22.5 2xl:px-0 ">
        <div className=" relative z-1 mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#0A0A0A] to-[#1A1A1A] py-22.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark xl:py-27.5">
          <img
            src="/images/shape/shape-04.png"
            alt="Man"
            className="absolute -top-25 -z-1 lg:left-0 h-6w-96 w-96"
          />
          <img
            src="/images/shape/shape-05.png"
            alt="Doodle"
            className="absolute bottom-0 right-0 -z-1"
          />

          <img
            fill
            src="/images/shape/shape-dotted-light-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 dark:hidden"
          />
          <img
            fill
            src="/images/shape/shape-dotted-dark-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 hidden dark:block"
          />

          <motion.div
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
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mx-auto mb-12.5 px-4 text-center md:w-4/5 md:px-0 lg:mb-17.5 lg:w-2/3 xl:w-1/2"
          >
            <h2 className="mb-4 text-3xl font-bold text-white dark:text-gray-200 xl:text-sectiontitle3">
              Trusted by Global Hackers.
            </h2>
            <p className="mx-auto lg:w-11/12 text-gray-300">
              Join the ranks of skilled hackers mastering AWS security. Our hands-on CTF challenges prepare you for real-world scenarios in cloud security testing.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-42.5">
            <motion.div
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
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-white dark:text-pink-400 xl:text-sectiontitle3">
                500K
              </h3>
              <p className="text-lg lg:text-para2 text-gray-300">Global Participants</p>
            </motion.div>
            <motion.div
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
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-white dark:text-pink-400 xl:text-sectiontitle3">
                1M+
              </h3>
              <p className="text-lg lg:text-para2 text-gray-300">CTF Challenges Completed</p>
            </motion.div>
            <motion.div
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
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-white dark:text-pink-400 xl:text-sectiontitle3">
                865
              </h3>
              <p className="text-lg lg:text-para2 text-gray-300">Top Scores Achieved</p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Funfact End ===== --> */}
    </>
  );
};

export default FunFact;
