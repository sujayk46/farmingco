import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';

import SpiceBanner from '../../assets/images/colorful-herbs-spices.png';
import jsonData from '../../assets/jsons/landingPage.json';
import { THEME_COLORS } from "../../utils/app.constants";

// Transition configuration for reusable animation settings
const transitionConfig = {
    duration: 0.5,
    ease: [0.17, 0.67, 0.83, 0.67], // Custom easing for bounce effect
};

function KnowUs() {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true); 
    }, []);

    const onClickBack = () => {
        navigate("/")
    };

    return (
        <>
            <section className="h-screen w-screen">
                <div className="flex justify-between">
                    <div className="pl-12 pt-6">Logo</div>
                    <div className="relative flex flex-col items-center justify-center">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-full flex items-center">
                            <div className="text-4xl font-bold pb-8 color-white ml-72">
                                <motion.button
                                    whileHover={{ x: -10 }} // Shift left by 10px when hovered
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="mr-3"
                                    onClick={onClickBack}
                                >
                                    <ArrowCircleLeftOutlinedIcon fontSize="large" style={{ color: 'white' }} />
                                </motion.button>
                                <span className="text-[2.2vw]">
                                    {jsonData.pageTitle.knowUS}
                                </span>
                            </div>
                        </div>
                        <div className="triangle"></div>
                    </div>
                </div>
                <div className="px-12 pb-12  h-full-180">
                    <div className="h-1/2">
                        <h1 className="text-secondary font-bold text-[2.8vw] typing-effect">
                            {jsonData.valuesSection.title}
                        </h1>
                        <div className="flex gap-5 font-medium text-[1.5vw] mt-1 w-full">
                            <motion.h1
                                className="w-1/2"
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: visible ? 1 : 0 }}
                                transition={transitionConfig}
                            >
                              {jsonData.valuesSection.description1} 
                            </motion.h1>
                            <motion.h1
                                className="w-1/2"
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: visible ? 1 : 0 }}
                                transition={transitionConfig}
                            >
                              {jsonData.valuesSection.description2}    
                            </motion.h1>
                        </div>
                    </div>
                    <div className="h-1/2 flex gap-5 mt-3">
                        <div className="h-full w-1/2 pr-5">
                            <img src={SpiceBanner} alt="spices-colorful-herbs" className="h-full w-full rounded-bl-[64px] rounded-r-xl" />
                        </div>
                        <div className="w-1/2">
                            <h1 className="text-primary font-bold text-[2.8vw] typing-effect">
                                {jsonData.contactSection.title}
                            </h1>
                            <div className="flex-col gap-5 font-semibold text-[1.4vw] flex h-fit justify-between font-montserrat mt-5">
                                <div className="flex gap-3">
                                    <FmdGoodOutlinedIcon fontSize="large" style={{ color: '#0FA157' }} />
                                    <motion.h1
                                        initial={{ x: 100, opacity: 0 }}
                                        animate={{ x: 0, opacity: visible ? 1 : 0 }}
                                        transition={transitionConfig}
                                    >
                                        {jsonData.contactSection.address}
                                    </motion.h1>
                                </div>
                                <div >
                                    <div className="flex gap-3">
                                        <EmailOutlinedIcon fontSize="large" style={{ color: '#0FA157' }} />
                                        <motion.h1
                                            initial={{ x: 100, opacity: 0 }}
                                            animate={{ x: 0, opacity: visible ? 1 : 0 }}
                                            transition={transitionConfig}
                                        >
                                            {jsonData.contactSection.email}
                                        </motion.h1>
                                    </div>
                                </div>
                                <div className="flex gap-8">
                                    <div className="flex">
                                        <LocalPhoneIcon fontSize="large" style={{ color: THEME_COLORS.secondary }} />
                                        <motion.h1 className="ml-3"
                                            initial={{ x: 100, opacity: 0 }}
                                            animate={{ x: 0, opacity: visible ? 1 : 0 }}
                                            transition={transitionConfig}
                                        >
                                            {jsonData.contactSection.phone}
                                        </motion.h1>
                                    </div>
                                    <div  className="flex">
                                        <InstagramIcon fontSize="large" style={{ color: THEME_COLORS.secondary }} />
                                        <motion.h1 className="ml-3"
                                            initial={{ x: 100, opacity: 0 }}
                                            animate={{ x: 0, opacity: visible ? 1 : 0 }}
                                            transition={transitionConfig}
                                        >
                                           {jsonData.contactSection.instagram}
                                        </motion.h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default KnowUs;
