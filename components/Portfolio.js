"use client";
import { Context } from "@/context/context";
import SectionContainer from "@/layouts/SectionContainer";
import { useContext } from "react";
import SectionTitle from "./SectionTitle";

const items = [
  {
    id: 1,
    title: "Booki",
    type: "img",
    src: "",
    img: "assets/img/projects/project-1.jpg",
    project: "Website",
    client: " OpenClassRooms",
    langages: " HTML, CSS ",
    previewLink: " ",
  },
  {
    id: 2,
    title: " OhmyFood ",
    type: "img",
    src: " ",
    img: "assets/img/projects/project-2.jpg ",
    project: "Website",
    client: " OpenClassRooms ",
    langages: "HTML, CSS - Mobile First",
    previewLink: (
      <a href="https://github.com/CharlieLechauve/Projet4_Ohmyfood" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    ),
  },
  {
    id: 3,
    title: " Print it ",
    type: "img",
    src: "  ",
    img: " assets/img/projects/project-3.jpg ",
    project: "Website",
    client: "OpenClassRooms",
    langages: " Javascript ",
    previewLink: (
      <a href="https://github.com/CharlieLechauve/Print-it" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    ),
  },
  {
    id: 4,
    title: " Sophie Buel ",
    type: "img",
    src: "  ",
    img: " assets/img/projects/project-4.jpg ",
    project: "Website",
    client: "OpenClassRooms",
    langages: "HTML, CSS, Javascript",
    previewLink: (
      <a href="https://github.com/CharlieLechauve/P6_Sophie-Buel" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    ),
  },
  {
    id: 5,
    title: " Qwenta ",
    type: "img",
    src: "",
    img: " assets/img/projects/project-5.jpg ",
    project: " Planification ",
    client: "OpenClassRooms",
    langages: "Kanban, Pearltress, Notion, Scrum ",
    previewLink: " ",
  },
  {
    id: 6,
    title: " Kasa ",
    type: "img",
    src: "",
    img: " assets/img/projects/project-6.jpg ",
    project: "Website",
    client: "OpenClassRooms",
    langages: "HTML, CSS, SCSS, React Router, Javascript",
    previewLink: (
      <a href="https://github.com/CharlieLechauve/Projet8_Kasa" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    ),
  },
  {
    id: 7,
    title: "Nina Carducci",
    type: "img",
    src: "",
    img: " assets/img/projects/project-7.jpg ",
    project: "SEO",
    client: "OpenClassRooms",
    langages: "SEO, Accessibility, performance optimisation",
    previewLink: (
      <a href="https://github.com/CharlieLechauve/P9_NinaCarducci" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    ),
  },
  {
    id: 8,
    title: "724 Event",
    type: "img",
    src: "",
    img: " assets/img/projects/project-8.jpg ",
    project: "Website Debug",
    client: "OpenClassRooms",
    langages: " React Dev Tools, Tests ",
    previewLink: (
      <a href="https://github.com/CharlieLechauve/P10_724Events" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    ),
  },
  {
    id: 9,
    title: "ArgentBank",
    type: "img",
    src: "",
    img: " assets/img/projects/project-9.jpg ",
    project: "Website",
    client: "OpenClassRooms",
    langages: "Javascript, React, Redux, Vite.js",
    previewLink: (
      <a href="https://github.com/CharlieLechauve/P11_ArgentBank" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    ),
  },
];

const Portfolio = () => {
  const { popupToggle } = useContext(Context);
  return (
    <SectionContainer id="portfolio">
      <div className="w-full pb-60">
        {/* Section Title Starts */}
        <SectionTitle
          bigTitle={"works"}
          colorTitle={"portfolio"}
          normalTitle={"my"}
        />
        {/* Section Title Ends */}
        {/* Portfolio Items Starts */}
        <div className="-mt-15 pb-60 xs:pb-20 portfolio">
          <div
            id="grid-gallery"
            className="xl:max-w-1140 custom-md-3:max-w-[calc(100%-195px)] md:max-w-720 sm:max-w-540 xs:max-w-full mx-auto"
          >
            {/* Portfolio Grid Starts */}
            <div className="grid-wrap mx-auto mb-25">
              <ul className="gridlist">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="w-1/3 down-lg:w-1/2 xs:w-full float-left cursor-pointer p-15 xs:px-0"
                    onClick={() => popupToggle(item)}
                  >
                    <figure className="transition duration-300 rounded-5 relative overflow-hidden">
                      <img
                        className="block relative w-full rounded-5 transition duration-300"
                        src={item.img}
                        alt=""
                      />
                      <div className="absolute w-full h-full flex items-center justify-center bg-accent">
                        <span className="uppercase text-fs-18 text-white">
                          {item.title}
                        </span>
                      </div>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>
            {/* Portfolio Grid Ends */}
          </div>
        </div>
        {/* Portfolio Items Ends */}
      </div>
    </SectionContainer>
  );
};
export default Portfolio;
