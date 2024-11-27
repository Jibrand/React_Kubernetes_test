import SectionHeader from "../../components/SectionHeader";
import { motion } from "framer-motion";
import SingleTestimonial from "./SingleTestimonial";
import image1 from "/images/user/user-01.png";
import image2 from "/images/user/user-02.png";

const Testimonial = () => {
    const testimonialData = [
        {
            id: 1,
            name: "Alice Johnson",
            designation: "Security Analyst @CloudSec",
            image: image1,
            content:
                "CloudSecurityBootcamp transformed my understanding of AWS security. The hands-on challenges are both engaging and educational.",
        },
        {
            id: 2,
            name: "Bob Lee",
            designation: "CTF Enthusiast @HackersHaven",
            image: image2,
            content:
                "This platform has the best AWS challenges. The environment is realistic and mimics real-world scenarios, which is invaluable for any aspiring cloud security professional.",
        },
        {
            id: 3,
            name: "Charlie Kim",
            designation: "DevSecOps Engineer @TechPioneers",
            image: image1,
            content:
                "I loved the challenge setups! They are not only challenging but also provide a clear path to learn and grow in AWS security. The community is very supportive as well.",
        },
        {
            id: 4,
            name: "Dana White",
            designation: "Cybersecurity Coach @SkillBuilders",
            image: image2,
            content:
                "If you're serious about cloud security, CloudSecurityBootcamp is a must. The testimonials speak for themselves; the learning experience is unique and highly effective.",
        },
    ];

    return (
        <section>
            <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0 mt-10">
                {/* Section Title Start */}
                <div className="animate_top mx-auto text-center">
                    <SectionHeader
                      headerInfo={{
                            title: `CLIENT TESTIMONIALS`,
                            subtitle: `What Our Users Say`,
                            description: `Unlock your potential in AWS security. Hear from our community members about their experiences with CloudSecurityBootcamp and how it’s shaping their careers in cybersecurity.`,
                        }}
                    />
                </div>
                {/* Section Title End */}
            </div>

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
                className="animate_top mx-auto mt-15 max-w-c-1235 px-4 md:px-8 xl:mt-20 xl:px-0"
            >
                {/* Slider container */}
                <div className="testimonials-container mb-20 pb-22.5">
                    <div className="testimonials-slider">
                        {testimonialData.map((review) => (
                            <div className="testimonial-item" key={review.id}>
                                <SingleTestimonial review={review} />
                            </div>
                        ))}
                        {/* Repeat items for continuous scrolling effect */}
                        {testimonialData.map((review) => (
                            <div className="testimonial-item cursor-pointer" key={review.id + '-duplicate'}>
                                <SingleTestimonial review={review} />
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Testimonial;
