import { motion } from "framer-motion";
import SectionHeader from "../../components/SectionHeader";

const Integration = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: `ADVANCED QUESTS`,
              subtitle: `Paid`,
              description: `Unlock the potential of AWS through hands-on challenges designed to test your skills. Master the art of cloud security with our immersive training environment.`,
            }}
          />
          {/* <!-- Section Title End --> */}
        </div>

        <div className="pattern-dots pattern-pink-500 pattern-bg-white pattern-size-4 pattern-opacity-10 relative mx-auto mt-15 max-w-c-1154 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -top-3/4 left-0 right-0 mx-auto h-full w-full">
            <img
              sizes="(max-width: 768px) 100vw"
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              style={{ position: "static" }}
            />
            <img
              fill
              src="/images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
            />
          </div>

          <div className="mt-10 text-center">
            <p className="text-lg font-semibold">
              Please register to receive notifications! 
            </p>
            <p className="text-sm text-gray-600">
              You will be notified when an admin adds you to the system.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default Integration;
