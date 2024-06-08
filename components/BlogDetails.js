"use client";
import { Context } from "@/context/context";
import SectionContainer from "@/layouts/SectionContainer";
import { useContext } from "react";
import SectionTitle from "./SectionTitle";

const BlogDetails = ({ blog }) => {
  const { dark, language } = useContext(Context);
  
  return (
    <SectionContainer id={"blog-details"}>
      <div className="w-full">
        {/* Section Title Starts */}
        <SectionTitle
          bigTitle={language === "FR" ? "Articles" : "Posts"}
          colorTitle={"blog"}
          normalTitle={language === "FR" ? "Notre" : "My"}
        />
        {/* Section Title Ends */}
        <div className="mx-auto max-w-700 down-sm:px-25 xs:pt-85">
          <div
            className={`text-fs-13 text-${
              dark ? "light-grey" : "black-3"
            } font-Open-sans`}
          >
            <span className="pr-15">
              <i className="fa fa-user pr-3 text-accent" /> {blog.author}
            </span>
            <span className="pr-15">
              <i className="fa fa-calendar pr-3 text-accent" /> {blog.date}
            </span>
            <span className="pr-15">
              <i className="fa fa-tags pr-3 text-accent" /> {blog.tags}

            </span>
          </div>
          <h1 className="mt-13 mb-20 font-semibold capitalize text-fs-40 xs:text-fs-26 leading-lh-1.2">
            {blog.title}
          </h1>
          <img className="rounded-5 mb-20 w-full" src={blog.img} alt="img" />
          <div className="font-Open-sans mb-60">
          <p className="mb-32 leading-lh-30">
            {language === "FR" 
              ? "Cet article n'est pas destiné à être un article complet ou même professionnel. Cet article est écrit par un développeur junior qui aime la nature et veut comprendre comment bien coder."
              : "This article is not intended to be a complete or even professional article. This article is written by a junior developer who loves nature and wants to understand how to code properly."
            }
          </p>
          <p className="mb-32 leading-lh-30">
            {language === "FR" 
              ? "Nous sommes de plus en plus nombreux et de plus en plus connectés. Il me semble que c'est notre devoir d'utiliser de bonnes pratiques lorsque nous développons. Toute personne souhaitant apporter sa contribution est la bienvenue. Je veux apprendre et m'améliorer. Toute information et aide sera la bienvenue pour toute personne souhaitant participer à ce projet de blog."
              : "There are always more and more of us and more and more connected. It seems to me that it is our duty to use good practices when we develop. Anyone wishing to make a contribution is welcome. I want to learn and improve. Any information and help will be welcome to anyone wishing to participate in this blog project."
            }
          </p>
          <p className="mb-32 leading-lh-30">
            {language === "FR" 
              ? "L'objectif à long terme est de créer un site web, un forum ou un blog, où tout développeur peut apprendre le code vert."
              : "The long-term objective is to create a website, forum or blog, where any developer can learn green code."
            }
          </p>

          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default BlogDetails;
