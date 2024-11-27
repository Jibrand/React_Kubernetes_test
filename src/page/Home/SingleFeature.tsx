import React from "react";
import { motion } from "framer-motion";

const SingleFeature = ({ feature }) => {
    const { icon, title, description, isLocked } = feature;

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`animate_top z-40 rounded-lg border p-7.5 shadow-solid-3 transition-all 
                 border-white bg-white text-black hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:text-white dark:hover:bg-hoverdark 
                xl:p-12.5`}
        >
            <div className={` ${isLocked ? "cursor-not-allowed blur-sm" : "cursor-pointer"}  text-gray-300 cursor-pointer relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-pink-500`}>
                {icon}
            </div>

            {/* Display title and description only if not locked */}
            {!isLocked ? (
                <>
                    <h3 className="mb-5 mt-7.5 text-xl font-semibold xl:text-itemtitle">
                        {title}
                    </h3>
                    <p className="text-slate-400">{description}</p>
                </>
            ) : (
                // Message for locked challenges
                <div className="relative z-10"> {/* Ensure this text is above the blur */}
                    <p className="text-slate-500 italic text-center mt-7.5">
                        Register to be notified when these levels are unlocked by admin.
                    </p>
                </div>
            )}
        </motion.div>
    );
};

export default SingleFeature;
