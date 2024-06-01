import { Context } from "@/context/context";
import { useContext } from "react";

const LanguageSwitch = () => {
  const { language, toggleLanguage } = useContext(Context);

  const isEnglish = language === "EN";

  return (
    <a
      href="#"
      className={`language-switch social-item flex h-50 w-50 leading-lh-42 text-center transition duration-300 text-fs-20 mx-6 bg-${
        isEnglish ? "light-grey" : "black-2"
      } rounded-full`}
      onClick={(event) => {
        event.preventDefault();
        toggleLanguage();
      }}
    >
      <span
        className={`${
          isEnglish ? "text-black-6" : "text-white"
        } text-fs-20`}
      >
        {isEnglish ? "En" : "Fr"}
      </span>
    </a>
  );
};

export default LanguageSwitch;
