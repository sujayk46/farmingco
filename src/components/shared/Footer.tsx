import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import BusinessIcon from '@mui/icons-material/Business';
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import InstagramIcon from "@mui/icons-material/Instagram";


import jsonData from "../../assets/jsons/landingPage.json";
import { THEME_COLORS } from "../../utils/app.constants";
import logo from '../../assets/png/logoDark.png'

// Transition configuration for reusable animation settings
const transitionConfig = {
    duration: 1,
    ease: [0.17, 0.67, 0.83, 0.67], // Custom easing for bounce effect
};

const Footer = () => {
    const [isInView, setIsInView] = useState(false);
    const footerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            {
                threshold: 0.9, // The footer is considered in view when at least 10% is isInView 
            }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, [footerRef]);

    // const onClickBack = () => {
    //     navigate("/")
    // };

    return (
        <footer ref={footerRef} className="pt-6">
            <div className="container mx-auto ">
                <div className="flex flex-col lg:flex-row justify-between items-center   px-6 md:px-none">
                    {/* Logo */}
                    <div className="hidden lg:block">
                        <img src={logo} alt="Logo" className="w-32 " />
                    </div>

                    {/* Address */}
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <div className="flex gap-3 justify-center  md:justify-start">
                            <BusinessIcon
                                style={{ color: THEME_COLORS.secondary }}
                            />
                            <motion.h1
                                className="font-montserrat font-bold"
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: isInView ? 1 : 0 }}
                                transition={transitionConfig}
                            >
                                {jsonData.contactSection.titleAddress}
                            </motion.h1>
                        </div>
                        <motion.h1
                            className="mt-2 ml-1 font-montserrat font-medium"
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: isInView ? 1 : 0 }}
                            transition={transitionConfig}
                        >
                            {jsonData.contactSection.address}
                        </motion.h1>
                    </div>

                    {/* Contact */}
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <div className="flex gap-3 justify-center  md:justify-start">
                            <EmailOutlinedIcon
                                style={{ color: THEME_COLORS.secondary }}
                            />
                            <motion.h1
                                className="font-montserrat font-bold"
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: isInView ? 1 : 0 }}
                                transition={transitionConfig}
                            >
                                {jsonData.contactSection.titleEmail}
                            </motion.h1>
                        </div>
                        <motion.h1
                            className="mt-2  font-montserrat font-medium"
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: isInView ? 1 : 0 }}
                            transition={transitionConfig}
                        >
                            {jsonData.contactSection.email}
                        </motion.h1>
                    </div>

                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <div className="flex gap-3">
                            <PermContactCalendarIcon style={{ color: THEME_COLORS.secondary }} />
                            <motion.h1
                                className="font-montserrat font-bold"
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: isInView ? 1 : 0 }}
                                transition={transitionConfig}
                            >
                                {jsonData.contactSection.titlePhone}
                            </motion.h1>
                        </div>
                        <motion.h1
                            className="mt-2 font-montserrat font-medium"
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: isInView ? 1 : 0 }}
                            transition={transitionConfig}
                        >
                            {jsonData.contactSection.phone}
                        </motion.h1>
                    </div>

                    {/* Social Media */}
                    <div className="text-center md:text-right">
                        <div className="flex gap-3">
                            <InstagramIcon style={{ color: THEME_COLORS.secondary }} />
                            <motion.h1
                                className="font-montserrat font-bold"
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: isInView ? 1 : 0 }}
                                transition={transitionConfig}
                            >
                                {jsonData.contactSection.titleSocialMedia}
                            </motion.h1>
                        </div>
                        <motion.h1
                            className="mt-2 font-montserrat font-medium"
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: isInView ? 1 : 0 }}
                            transition={transitionConfig}
                        >
                            {jsonData.contactSection.instagram}
                        </motion.h1>
                    </div>
                </div>
            </div>
            <div className="bg-base h-full px-6 mt-2 md:flex-row sm:flex-col flex text-center items-center justify-between md:px-16 font-montserrat pb-3">
                <h1 className="mt-3 px-3 text-sm md:text-md">© 2017 The Farming Co. All Rights Reserved.</h1>
                <h1 className="mt-3 px-3 text-sm md:text-md">© 2024 Maintained by The Farming Co.</h1>
            </div>
        </footer>
    );
};
export default Footer;
