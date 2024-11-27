import { motion } from "framer-motion";
import { useState } from "react";
import FAQItem from "./FAQItem.jsx";

const FAQ = () => {
    const [activeFaq, setActiveFaq] = useState(1);

    const handleFaqToggle = (id) => {
        activeFaq === id ? setActiveFaq(0) : setActiveFaq(id);
    };

    const faqData = [
        {
            id: 1,
            quest: "What is AWS Capture the Flag (CTF)?",
            ans: "AWS Capture the Flag (CTF) is an interactive learning platform designed for users to enhance their AWS security skills through real-world challenges and scenarios. Participants can learn about cloud security, vulnerability assessment, and threat mitigation.",
        },
        {
            id: 2,
            quest: "How can I participate in the CTF events?",
            ans: "To participate in our AWS CTF events, simply register on our platform, create an account, and check the events section for upcoming challenges. Follow the guidelines provided for each event to get started.",
        },
        {
            id: 3,
            quest: "Do I need prior experience to join?",
            ans: "No prior experience is red! Our platform caters to all skill levels, from beginners to advanced users. Each challenge is designed to help you learn and improve your AWS security skills.",
        },
        {
            id: 4,
            quest: "What resources are available for beginners?",
            ans: "We provide a range of resources, including tutorials, guides, and community forums, to help beginners understand AWS security concepts. Additionally, we recommend our online training modules for a structupink learning path.",
        },
    ];

    return (
        <>
            {/* <!-- ===== FAQ Start ===== --> */}
            <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30 px-20">
                <div className="relative mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
                    <div className="absolute -bottom-16 -z-1 h-full w-full">
                        <img
                            fill
                            src="/images/shape/shape-dotted-light.svg"
                            alt="Dotted"
                            className="dark:hidden"
                        />
                        <img
                            fill
                            src="/images/shape/shape-dotted-light.svg"
                            alt="Dotted"
                            className="hidden dark:block"
                        />
                    </div>
                    <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center xl:gap-32.5">
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
                            className="animate_left md:w-2/5 lg:w-1/2"
                        >
                            <span className="font-medium uppercase text-black dark:text-white">
                                OUR FAQS
                            </span>
                            <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                                Frequently Asked
                                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-pink-500 dark:before:bg-titlebgdark">
                                    Questions
                                </span>
                            </h2>

                            <a
                                href="#"
                                className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-pink-500 dark:text-white dark:hover:text-pink-500"
                            >
                                <span className="duration-300 group-hover:pr-2">Know More</span>
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
                            </a>
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
                            className="animate_right md:w-3/5 lg:w-1/2"
                        >
                            <div className="rounded-lg bg-white shadow-solid-8 dark:border dark:border-strokedark dark:bg-blacksection">
                                {faqData.map((faq, key) => (
                                    <FAQItem
                                        key={key}
                                        faqData={{ ...faq, activeFaq, handleFaqToggle }}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* <!-- ===== FAQ End ===== --> */}
        </>
    );
};

export default FAQ;