import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { useTranslation } from "react-i18next";

const locales = {
  en: { title: "English" },
  ua: { title: "Українська" },
};

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-black backdrop-blur-sm bg-opacity-50" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <ul style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {Object.keys(locales).map((locale) => (
            <li key={locale}>
              <button
                style={{
                  display: "flex",
                  fontWeight:
                    i18n.resolvedLanguage === locale ? "bold" : "normal",
                }}
                type="submit"
                onClick={() => i18n.changeLanguage(locale)}
              >
                {locale === "en" && <span>{"\u{1F1FA}\u{1F1F8}"}</span>}
                {locale === "ua" && <span>{"\u{1F1FA}\u{1F1E6}"}</span>}
              </button>
            </li>
          ))}
        </ul>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          <li
            className={`${
              active === t("navbar.navbarItem1")
                ? "text-white"
                : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive(String(t("navbar.navbarItem1")))}
          >
            <a href={`#about`}>{t("navbar.navbarItem1")}</a>
          </li>
          <li
            className={`${
              active === t("navbar.navbarItem2")
                ? "text-white"
                : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive(String(t("navbar.navbarItem2")))}
          >
            <a href={`#works`}>{t("navbar.navbarItem2")}</a>
          </li>
          <li
            className={`${
              active === t("navbar.navbarItem3")
                ? "text-white"
                : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive(String(t("navbarItem3")))}
          >
            <a href={`#contact`}>{t("navbar.navbarItem3")}</a>
          </li>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
