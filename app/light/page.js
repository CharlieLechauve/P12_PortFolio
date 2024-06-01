"use client";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Portfolio from "@/components/Portfolio";
import { Context } from "@/context/context";
import Revealer from "@/layouts/Revealer";
import Layout from "@/layouts/Layout";
import { useContext, useEffect } from "react";

const Page = () => {
  const { darkToggle, changeColor } = useContext(Context);
  useEffect(() => {
    darkToggle();
    changeColor("green");
  }, []);

  return (
    <Layout>
      {/* Main Content Starts */}
      <div className="w-full h-full pages overflow-hidden">
        {/* Home Starts */}
        <Home authorImage={"assets/img/light.jpg"} />
        {/* Home Ends */}
        {/* About Starts */}
        <About />
        {/* About Ends */}
        {/* Portfolio Starts */}
        <Portfolio />
        {/* Portfolio Ends */}
        {/* Contact Starts */}
        <Contact />
        {/* Contact Ends */}
        {/* Blog Starts */}
        <Blog />
        {/* Blog Ends */}
      </div>
      <Revealer />
    </Layout>
  );
};
export default Page;
