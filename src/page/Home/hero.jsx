import { useState } from "react";
import { useLocation } from "react-router-dom";

const Hero = () => {

  const [email, setEmail] = useState("");
  const Location = useLocation()

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-pink-400 dark:text-pink-400">
                🚀 Master AWS Pentesting with us.
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-gray-600 dark:text-gray-300 xl:text-hero ">
                AWS Security Challenges {" "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-pink-500 dark:before:bg-pink-600">
                  Built for Hackers
                </span>
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                CloudSecurityBootcamp provides a hands-on, real-world environment
                for mastering AWS penetration testing and security audits. Packed with
                AWS-specific CTF challenges to sharpen your skills in a fun, competitive way.
               </p>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-pink-500 px-7.5 py-2.5 text-black duration-300 ease-in-out hover:bg-pink-600 hover:text-white dark:bg-pink-600 dark:hover:bg-pink-700 shadow-md shadow-pink-400"
                    >
                      Start AWS Challenge
                    </button>
                  </div>
                </form>

                <p className="mt-5 text-gray-400 dark:text-gray-500">
                  Start your cloud security journey today.
                </p>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
               
                <img
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  className="absolute bottom-0 right-0 z-10"
                />
                <img
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative aspect-[700/444] w-full">
                  <img
                    className="shadow-solid-l dark:hidden rounded-xl picboxc "
                    src="/images/brand/prowler-output.webp"
                    alt="Hero"
                    fill
                  />
                  <img
                    className="hidden shadow-solid-l dark:block rounded-xl picboxc "
                    src="/images/brand/prowler-output.webp"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
