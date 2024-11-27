import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-20 lg:py-25">
            <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
              {/* Logo and Description Column */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top w-full md:w-1/3"
              >
                <a href="/" className="relative">
                  <img
                    src="/images/logo/logo.png"
                    alt="Logo"
                    className="dark:hidden h-14 w-14"
                  />
                  <img
                    src="/images/logo/logo.png"
                    alt="Logo"
                    className="hidden dark:block h-14 w-14"
                  />
                </a>
                <p className="mb-10 mt-5">
                  Welcome to CloudSecurityBootcamp, your ultimate CTF experience focusing on AWS security challenges. Join us to sharpen your skills and outsmart the competition.
                </p>
                <p className="mb-1.5 text-sectiontitle uppercase tracking-[5px]">
                  Contact
                </p>
                <a
                  href="#"
                  className="text-md font-medium text-black dark:text-white"
                >
                  hello@CloudSecurityBootcamp.com
                </a>
              </motion.div>

              {/* Quick Links Column */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top w-full md:w-1/3 "
              >
                <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                  Quick Links
                </h4>
                <ul className="flex flex-col">
                  <li>
                    <a
                      href="#"
                      className="mb-3 inline-block hover:text-pink"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="mb-3 inline-block hover:text-pink-500"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="mb-3 inline-block hover:text-pink-500"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="mb-3 inline-block hover:text-pink-500"
                    >
                      Pricing
                    </a>
                  </li>
                </ul>
              </motion.div>

              {/* Newsletter Column */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top w-full md:w-1/3"
              >
                <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                  Newsletter
                </h4>
                <p className="mb-4">Subscribe to receive future updates</p>
                <form action="#">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Email address"
                      className="w-full rounded-full border border-stroke px-6 py-3 shadow-solid-11 focus:border-pink-500 focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-pink-500"
                    />
                    <button
                      aria-label="signup to newsletter"
                      className="absolute right-0 p-4"
                    >
                      <svg
                        className="fill-[#757693] hover:fill-pink-500 dark:fill-white"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_48_1487)">
                          <path
                            d="M3.1175 1.17318L18.5025 9.63484C18.5678 9.67081 18.6223 9.72365 18.6602 9.78786C18.6982 9.85206 18.7182 9.92527 18.7182 9.99984C18.7182 10.0744 18.6982 10.1476 18.6602 10.2118C18.6223 10.276 18.5678 10.3289 18.5025 10.3648L3.1175 18.8265C3.05406 18.8614 2.98262 18.8792 2.91023 18.8781C2.83783 18.8769 2.76698 18.857 2.70465 18.8201C2.64232 18.7833 2.59066 18.7308 2.55478 18.6679C2.51889 18.6051 2.50001 18.5339 2.5 18.4615V1.53818C2.50001 1.46577 2.51889 1.39462 2.55478 1.33174C2.59066 1.26885 2.64232 1.2164 2.70465 1.17956C2.76698 1.14272 2.83783 1.12275 2.91023 1.12163C2.98262 1.12051 3.05406 1.13828 3.1175 1.17318ZM4.16667 10.8332V16.3473L15.7083 9.99984L4.16667 3.65234V9.16651H8.33333V10.8332H4.16667Z"
                            />
                        </g>
                        <defs>
                          <clipPath id="clip0_48_1487">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          <div className="flex flex-col flex-wrap items-center justify-center gap-5 border-t border-stroke py-7 dark:border-strokedark lg:flex-row lg:justify-between lg:gap-0">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <ul className="flex items-center gap-8">
                <li>
                  <a href="#" className="hover:text-pink-500">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-500">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <p>
                &copy; {new Date().getFullYear()} CloudSecurityBootcamp. All rights reserved
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <ul className="flex items-center gap-5">
                <li>
                  <a href="#" className="hover:text-pink-500">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-500">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-500">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
