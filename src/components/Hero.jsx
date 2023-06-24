// @ts-nocheck
import { motion } from "framer-motion";
import React from "react";
import { styles } from "../styles";
import VideoBg from "reactjs-videobg";
import { useTranslation } from "react-i18next";
import { ComputersCanvas } from "./canvas";
import VideoBgMp4 from "../assets/videos/ua-flag-on-the-building.mp4";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const isMobile = navigator.userAgent.match(/Android/i);
  return (
    <>
      <VideoBg wrapperClass="h-screen w-screen video-bg" videoClass="video-bg">
        <VideoBg.Source src={VideoBgMp4} type="video/mp4" />
      </VideoBg>
      <section className={`relative w-full h-screen mx-auto`}>
        <div
          className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          {/* <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full gradientBackground" />
            <div className={`w-1 sm:h-80 h-40 gradientBackground`} />
          </div> */}

          <div>
            <div className="container">
              <h1
                dangerouslySetInnerHTML={{ __html: t("hero.title") }}
                className={`${styles.heroHeadText} video-text text-white`}
              ></h1>
            </div>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              {t("hero.subtitle")}
            </p>
          </div>
        </div>

        {isMobile ? <div>Computer</div> : <ComputersCanvas />}

        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-white mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
