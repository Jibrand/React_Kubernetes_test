  import SectionHeader from "../../components/SectionHeader";

const Pricing = () => {
  return (
    <>
      {/* <!-- ===== Pricing Table Start ===== --> */}
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
             headerInfo={{
                title: `PRICING PLANS`,
                subtitle: `Simple Pricing for Cloud Security Bootcamp`,
                description: `Unlock your potential in cloud security with our specialized AWS challenges. Dive into our hands-on labs and elevate your skills!`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <img
              fill
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-gray-500 dark:text-white xl:text-sectiontitle3">
                $10{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /month
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-pink-400 dark:text-white">
                Basic AWS Challenge Pack
              </h4>
              <p className="text-gray-500">Kickstart your cloud security journey with our foundational labs.</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-gray-600 last:mb-0 dark:text-manatee">
                    5 AWS Labs
                  </li>
                  <li className="mb-4 text-gray-600 last:mb-0 dark:text-manatee">
                    Community Support
                  </li>
                  <li className="mb-4 text-gray-500 opacity-40 last:mb-0 dark:text-manatee">
                    Access to Tutorials
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-pink-600 transition-all duration-300 dark:text-pink-600 dark:hover:pink-900"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Get the Plan
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-pink-500 picboxc px-4.5 py-1.5 text-metatitle font-medium uppercase text-white">
                Most Popular
              </div>

              <h3 className="mb-7.5 text-3xl font-bold text-gray-500 dark:text-white xl:text-sectiontitle3">
                $59{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /month
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-pink-400 dark:text-white">
                Advanced AWS Security Pack
              </h4>
              <p className="text-gray-500">Take your skills to the next level with advanced scenarios.</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-gray-500 last:mb-0 dark:text-manatee">
                    15 AWS Labs
                  </li>
                  <li className="mb-4 text-gray-500 last:mb-0 dark:text-manatee">
                    24/7 Community Support
                  </li>
                  <li className="mb-4 text-gray-500 last:mb-0 dark:text-manatee">
                    Exclusive Webinars
                  </li>
                  <li className="mb-4 text-gray-500 opacity-40 last:mb-0 dark:text-manatee">
                    Advanced Tutorials
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-pink-600 transition-all duration-300 dark:text-pink-600 dark:hover:pink-900"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Get the Plan
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-gray-500 dark:text-white xl:text-sectiontitle3">
                $189{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /month
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-pink-400 dark:text-white">
                Ultimate AWS Security Masterclass
              </h4>
              <p className="text-gray-500">Become a cloud security expert with in-depth training.</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-gray-500 last:mb-0 dark:text-manatee">
                    30 AWS Labs
                  </li>
                  <li className="mb-4 text-gray-500 last:mb-0 dark:text-manatee">
                    Priority Support
                  </li>
                  <li className="mb-4 text-gray-500 last:mb-0 dark:text-manatee">
                    Certification Preparation
                  </li>
                  <li className="mb-4 text-gray-500 opacity-40 last:mb-0 dark:text-manatee">
                    Networking Opportunities
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-pink-600 transition-all duration-300 dark:text-pink-600 dark:hover:pink-900"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Get the Plan
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
         
      </section>
      {/* <!-- ===== Pricing Table End ===== --> */}
    </>
  );
};

export default Pricing;
