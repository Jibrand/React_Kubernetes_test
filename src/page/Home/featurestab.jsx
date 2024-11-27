import { useState } from "react";
import FeaturesTabItem from "./FeaturesTabItem";
import { motion } from "framer-motion";

const FeaturesTab = () => {
    const [currentTab, setCurrentTab] = useState("tabOne");

    const featuresTabData = [
        {
            id: "tabOne",
            title: "Sleek & User-Friendly Interface for Hackers.",
            desc1: `Experience an intuitive user interface designed for efficiency and clarity. Navigate through our AWS challenges effortlessly as you sharpen your skills in a clean, distraction-free environment.`,
            desc2: `Our layout ensures that you can focus on hacking without unnecessary clutter. Discover the tools you need at your fingertips, all wrapped in a stylish dark theme that feels like home for any ethical hacker.`,
            image: "/images/about/about-dark-01.png",
            imageDark: "/images/about/about-dark-01.png",
        },
        {
            id: "tabTwo",
            title: "Ready-to-Use CTF Challenges for AWS Testing.",
            desc1: `Dive into hands-on labs tailopink specifically for AWS security testing. Our platform offers a variety of Capture The Flag (CTF) challenges that will enhance your skills and prepare you for real-world scenarios.`,
            desc2: `Whether you’re a novice or an expert, you'll find challenges that cater to all skill levels, allowing you to progress and expand your knowledge in AWS security effortlessly.`,
            image: "/images/about/about-dark-01.png",
            imageDark: "/images/about/about-dark-01.png",
        },
        {
            id: "tabThree",
            title: "Robust Integrations for a Comprehensive Learning Experience.",
            desc1: `Integrate your favorite tools and services with our platform to enhance your learning journey. Our CTF environment supports multiple integrations, ensuring you have access to the resources you need to succeed.`,
            desc2: `From database connections to authentication systems, we cover all the essential functionalities to streamline your learning and allow you to focus on mastering AWS security testing.`,
            image: "/images/about/about-dark-01.png",
            imageDark: "/images/about/about-dark-01.png",
        },
    ];

    return (
        <>
            {/* <!-- ===== Features Tab Start ===== --> */}
            <section className="relative pb-20 pt-18.5 lg:pb-22.5">
                <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                    <div className="absolute -top-16 -z-1 mx-auto h-[350px] w-[90%]">
                        <img
                            fill
                            className="dark:hidden"
                            src="/images/shape/shape-dotted-light.svg"
                            alt="Dotted Shape"
                        />
                        <img
                            fill
                            className="hidden dark:block"
                            src="/images/shape/shape-dotted-dark.svg"
                            alt="Dotted Shape"
                        />
                    </div>

                    {/* <!-- Tab Menues Start --> */}
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
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="animate_top mb-15 flex flex-wrap justify-center rounded-[10px] border border-stroke bg-white shadow-solid-5 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6 md:flex-nowrap md:items-center lg:gap-7.5 xl:mb-21.5 xl:gap-12.5"
                    >
                        <div
                            onClick={() => setCurrentTab("tabOne")}
                            className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${currentTab === "tabOne"
                                    ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-pink-500"
                                    : ""
                                }`}
                        >
                            <div className="flex h-12.5 w-12.5 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                                <p className="text-metatitle3 font-medium text-black dark:text-white">
                                    01
                                </p>
                            </div>
                            <div className="md:w-3/5 lg:w-auto">
                                <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                                    User-Friendly Interface
                                </button>
                            </div>
                        </div>
                        <div
                            onClick={() => setCurrentTab("tabTwo")}
                            className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${currentTab === "tabTwo"
                                    ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-pink-500"
                                    : ""
                                }`}
                        >
                            <div className="flex h-12.5 w-12.5 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                                <p className="text-metatitle3 font-medium text-black dark:text-white">
                                    02
                                </p>
                            </div>
                            <div className="md:w-3/5 lg:w-auto">
                                <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                                    AWS CTF Challenges
                                </button>
                            </div>
                        </div>
                        <div
                            onClick={() => setCurrentTab("tabThree")}
                            className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${currentTab === "tabThree"
                                    ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-pink-500"
                                    : ""
                                }`}
                        >
                            <div className="flex h-12.5 w-12.5 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                                <p className="text-metatitle3 font-medium text-black dark:text-white">
                                    03
                                </p>
                            </div>
                            <div className="md:w-3/5 lg:w-auto">
                                <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                                    Comprehensive Integrations
                                </button>
                            </div>
                        </div>
                    </motion.div>
                    {/* <!-- Tab Menues End --> */}

                    {/* <!-- Tab Content Start --> */}
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
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="animate_top mx-auto max-w-c-1154"
                    >
                        {featuresTabData.map((feature, key) => (
                            <div
                                className={feature.id === currentTab ? "block" : "hidden"}
                                key={key}
                            >
                                <FeaturesTabItem featureTab={feature} />
                            </div>
                        ))}
                    </motion.div>
                    {/* <!-- Tab Content End --> */}
                </div>
            </section>
            {/* <!-- ===== Features Tab End ===== --> */}
        </>
    );
};

export default FeaturesTab;
