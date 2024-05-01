import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import DropletButton from "../../components/shared/DropletButton";
import jsonData from '../../assets/jsons/landingPage.json';

// Transition configuration for reusable animation settings
const transitionConfig = {
  duration: 0.5,
  ease: [0.17, 0.67, 0.83, 0.67], // Custom easing for bounce effect
};

function SplashScreen() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true); // Trigger the animation on load
  }, []);

  const onClickExoloreProducts = () => {
    console.log("Home button clicked");
  };

  const onClickKnowUs = () => {
    navigate("/knowus");
  };

  return (
    <>
      <section className="h-screen w-screen">
        <section className="bg-spices-img bg-image h-screen w-screen">
          <div className="p-12 h-full">
            <div>logo</div>
            <div className="h-full content-center">
              <h1 className="Title typing-effect">
                {jsonData.mainTitle}
              </h1>
              <div className="Title GradientSecondary w-fit px-2 mt-2 rounded-bl-3xl bg-opacity-35">
                <motion.h1
                  className="pb-0.1"
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0,opacity: visible ? 1 : 0 }}
                  transition={transitionConfig}
                > 
                  {jsonData.subtitle}
                </motion.h1>
              </div>
              <motion.h1
                className="SubTitle mt-8  w-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: visible ? 1 : 0 }}
                transition={transitionConfig}
              >
                 {jsonData.tagline}
              </motion.h1>
              <div className="mt-6 flex gap-8">
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
                    label={jsonData.buttonLabel.knowUs}
                    onClick={onClickKnowUs}
                    Icon={InfoOutlinedIcon}
                    iconStyle={{ transform: "scaleX(-1)" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default SplashScreen;
