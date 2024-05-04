import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import SearchIcon from "@mui/icons-material/Search";
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';

import BannerImage from "../../assets/images/herbs.jpg"
import Card from "./Card";
import { cardsData, THEME_COLORS } from "../../utils/app.constants";
import DropletButton from "../../components/shared/DropletButton";
import jsonData from '../../assets/jsons/landingPage.json';
import Swal from "sweetalert2";
// Transition configuration for reusable animation settings
const transitionConfig = {
    duration: 0.6,
    ease: [0.17, 0.67, 0.83, 0.67], // Custom easing for bounce effect
};

const Home = () => {
    const [data, setData] = useState([{}]);
    const productsSectionRef = useRef(null);

    useEffect(() => {
        setVisible(true);
        setData(cardsData);
    }, [])

    const [visible, setVisible] = useState(false);

    const onClickExoloreProducts = () => {
        if (productsSectionRef.current) {
            productsSectionRef.current?.scrollIntoView({
                behavior: 'smooth', // Smooth scrolling
                block: 'start', // Scroll to the start of the section
            });
        }
    };

    const onClickSignIn = () => {
        Swal.fire({
            icon: "info",
            title: "Coming Soon!",
            text: "The sign-in feature is coming soon. Please check back later.",
            confirmButtonColor: THEME_COLORS.primary
        });
    };

    const onClickBuyNow = () => {
        Swal.fire({
            icon: "info",
            title: "Coming Soon!",
            text: "Our online store will be launching soon. Stay tuned for exciting products!",
            confirmButtonColor: THEME_COLORS.primary
        });
    };
    return (
        <>
            <section className="grid grid-cols-4 px-10 md:px-16 lg:grid-cols-12 md:grid-cols-8 gap-x-5 gl:px-16 bg-primary-2 h-fit lg:h-screen-minus-80 lg:pt-12 bg-texture-img bg-img ">
                <div className="col-start-1 col-span-4 md:col-end-6 lg:col-end-7 md:col-start-1 md:col-span-5">
                    <div className="h-full content-center">
                        <h1 className="Title typing-effect  mt-5 md:mt-none">
                            {jsonData.mainTitle}
                        </h1>
                        <div className="Title GradientSecondary w-fit px-2 mt-2 md:mt-5 rounded-bl-3xl bg-opacity-35">
                            <motion.h1
                                className="pb-0.1"
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: visible ? 1 : 0 }}
                                transition={transitionConfig}
                            >
                                {jsonData.subtitle}
                            </motion.h1>
                        </div>
                        <motion.h1
                            className="font-montserrat  lg:text-2xl  font-semibold mt-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: visible ? 1 : 0 }}
                            transition={transitionConfig}
                        >
                            {jsonData.tagline}
                        </motion.h1>
                        <div className="flex gap-8 mt-8">
                            <div>
                                <DropletButton
                                    label={jsonData.buttonLabel.exploreProducts}
                                    onClick={onClickExoloreProducts}
                                    Icon={SearchIcon}
                                    iconStyle={{ transform: "scaleX(-1)" }}
                                />
                            </div>
                            <div>
                                <DropletButton
                                    isDroplet={false}
                                    label={jsonData.buttonLabel.signIn}
                                    onClick={onClickSignIn}
                                    Icon={LoginRoundedIcon}
                                    iconStyle={{ transform: "scaleX(1)" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <img src={BannerImage} alt="Main"
                    className="banner-animation hidden md:block object-fill col-start-3 col-span- mt-10  justify-self-center self-center md:mt-10   md:justify-self-center lg:col-start-9 lg:col-span-4 rounded-lg lg:mt-2 lg:mb-[-15px] lg:h-[475px] lg:w-full md:col-start-6 md:col-span-4  md:h-72 bg-base" />
            </section>
            <section ref={productsSectionRef} id="products" className="grid grid-cols-4 auto-rows-auto px-10 mt-10 lg:grid-cols-12 md:grid-cols-8 gap-x-5 lg:px-16 bg-base" >
                <div className=" col-start-1  col-span-8 text-Karla text-xl font-extrabold self-center text-primary-1  lg:col-start-1 mt-5">

                    <h1 className="font-main text-4xl md:text-5xl font-medium mb-2 text-primary-1 font-roboto  text-primary">
                        {jsonData.pageTitle.pageTitle}
                    </h1>
                </div>
                <div className="col-start-1 col-span-8 my-3 md:col-start-2 md:col-span-6 lg:col-start-1 lg:col-span-12 lg:flex lg:justify-evenly lg:gap-x-5 lg:flex-wrap lg:items-center ">
                    {
                        data.map((product, index) => {
                            return <Card
                                img={""}
                                description={""}
                                name={""}
                                subName={""}
                                price={0}
                                originalPrice={0}
                                discount={0}
                                key={index}
                                {...product}
                                onClick={onClickBuyNow}
                            />
                        })
                    }</div>
            </section>
        </>
    )
}
export default Home;