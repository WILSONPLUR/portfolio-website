// @ts-nocheck
import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { web } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useTranslation } from "react-i18next";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t("about.subtitle")}</p>
        <h2 className={styles.sectionHeadText}>{t("about.title")}</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary drop-shadow-lg shadow-sm text-[17px] max-w-3xl leading-[30px]"
      >
        {t("about.description")}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {/* {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))} */}
        <ServiceCard
          index={0}
          title={t("about.cards.card1.title")}
          icon={web}
        />
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
