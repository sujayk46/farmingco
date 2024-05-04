import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";


import img1 from "../../assets/images/indian-spices.jpg"
import img2 from "../../assets/images/colorful-herbs-spices.png"
import jsonData from "../../assets/jsons/landingPage.json";

// Transition configuration for reusable animation settings
const transitionConfig = {
    duration: 1,
    ease: [0.17, 0.67, 0.83, 0.67], // Custom easing for bounce effect
};

const About = () => {
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0.2 } // Trigger when 50% of the section is in view
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [sectionRef]);

    return (
        <section ref={sectionRef} className="grid grid-cols-4 auto-rows-auto px-16 py-10 lg:grid-cols-12 md:grid-cols-8 gap-x-5 gl:px-16 bg-base" id="about">
            <div className="col-start-1 col-span-4 lg:col-start-1 lg:col-end-7 md:col-start-1 md:col-span-5">
                <h1 className="font-main text-5xl font-medium pt-6 text-primary-1 font-roboto text-primary">{jsonData.valuesSection.title}</h1>
                <p className="pt-3 pb-6 font-main text-Highlight-2 text-3xl font-montserrat text-secondary">{jsonData.valuesSection.subTitle}</p>
                <p className="lg:pb-10 md:pb-9 pb-6 text-Highlight-2 font-second lg:text-lg text-black font-semibold font-montserrat">
                    {jsonData.valuesSection.description2}
                </p>
                <p className="lg:pb-10 md:pb-9 pb-6 text-Highlight-2 font-second lg:text-lg text-black font-semibold font-montserrat">
                    {jsonData.valuesSection.description1}
                </p>
            </div>
            <div className="w-full col-start-1 col-span-4 justify-self-end col-end-5 flex h-fit justify-start md:col-start-6 md:justify-start md:col-span-6 md:mt-10 lg:col-start-7 lg:col-span-6 self-center">
                <motion.img
                    initial={{ rotateY: 180, opacity: 0 }}
                    animate={{ rotateY: isInView ? 0 : 180, opacity: isInView ? 1 : 0 }}
                    transition={transitionConfig}
                    alt="photo_1" src={img1}
                    className="w-1/2 h-52 rounded-lg mt-12 hover:z-50 lg:w-1/2 lg:h-80 " />
                <motion.img
                    initial={{ rotateY: 180, opacity: 0 }}
                    animate={{ rotateY: isInView ? 0 : 180, opacity: isInView ? 1 : 0 }}
                    transition={transitionConfig}
                    alt="photo_2" src={img2}
                    className="w-1/2 h-52 rounded-lg md:ml-[-46px] z-40 hover:z-50  lg:w-1/2 lg:h-80 " />
            </div>
        </section>
    );
};
export default About;
