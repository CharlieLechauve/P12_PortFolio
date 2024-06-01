"use client";
import DayLight from "@/components/DayLight";
import LanguageSwitch from "@/components/LanguageSwitch";
import Popup from "@/components/Popup";
import { utility } from "@/utility";
import Switcher from "@/components/Switcher";
import { Context } from "@/context/context";
import { useContext, useEffect } from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  const { direction, popup, dark } = useContext(Context);
  useEffect(() => {
    utility.customCursor();
  }, []);

  return (
    <div
      className={`home ${dark ? "dark" : ""} bg-${
        dark ? "black" : "white"
      } text-${
        dark ? "white" : "black-6"
      } relative w-full h-full overflow-hidden anim--effect-3 animation-${direction}`}
    >
      {popup && <Popup />}
      <Switcher />
      <DayLight />
      <LanguageSwitch />

      {/* Header Starts */}
      <Header />
      {/* Header Ends */}
      {children}
    </div>
  );
};
export default Layout;
