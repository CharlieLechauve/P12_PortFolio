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
    img: "assets/img/projects/booki.webp",
    project: "Website",
    client: " OpenClassRooms",
    langages: " HTML, CSS ",
    previewLink: " ",
    frenchDescription: " Intégrer l'interface d'un site web avec du code HTML et CSS ",
    englishDescription: " Integrate the interface of a website with HTML and CSS code ",
  },
  {
    id: 2,
    title: " OhmyFood ",
    type: "img",
    src: " ",
    img: "assets/img/projects/project-2.webp ",
    project: "Website",
    client: " OpenClassRooms ",
    langages: "HTML, CSS - Mobile First",
    previewLink: (
      <div>
        <a href="https://github.com/CharlieLechauve/Projet4_Ohmyfood" target="_blank" rel="noopener noreferrer">
          Github
        </a>
        <br />
        <a href="https://charlielechauve.github.io/Projet4_Ohmyfood/" target="_blank" rel="noopener noreferrer">
          Website
        </a>
      </div>
    ),
    frenchDescription: " Intégrer une maquette, incluant des animations, en mobile first ",
    englishDescription: " Integrate a mockup including animations with a mobile-first approach ",
  },
  {
    id: 3,
    title: " Print it ",
    type: "img",
    src: "  ",
    img: " assets/img/projects/project-3.webp ",
    project: "Website",
    client: "OpenClassRooms",
    langages: " Javascript ",
    previewLink: (
      <div>
        <a href="https://github.com/CharlieLechauve/Print-it" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <br />
        <a href="https://charlielechauve.github.io/Print-it/" target="_blank" rel="noopener noreferrer">
          Website
        </a>
      </div>
    ),
    frenchDescription: " Créer et implémenter un carrousel en Javascript ",
    englishDescription: " Create and implement a carousel in JavaScript ",
  },
  {
    id: 4,
    title: " Sophie Buel ",
    type: "img",
    src: "  ",
    img: " assets/img/projects/project-4.webp ",
    project: "Website",
    client: "OpenClassRooms",
    langages: "HTML, CSS, Javascript",
    previewLink: (
      <a href="https://github.com/CharlieLechauve/P6_Sophie-Buel" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    ),
    frenchDescription: " Création d'un Portfolio pour une photographe incluant des filtres, d'un panel administrateur et utilisation d'appel API ",
    englishDescription: " Creation of a Portfolio for a Photographer including filters, an admin panel, and usage of API calls",
  },
  {
    id: 5,
    title: " Qwenta ",
    type: "img",
    src: "",
    img: " assets/img/projects/project-5.webp ",
    project: " Planification ",
    client: "OpenClassRooms",
    langages: "Kanban, Pearltress, Notion, Scrum ",
    previewLink: " ",
    frenchDescription: " Introduction à la planification de projet. Utilisation d'outils de veille technologique et mise en place d'une stratégie Agile ",
    englishDescription: " Introduction to Project Planning. Use of technology monitoring tools and implementation of an Agile strategy ",
  },
  {
    id: 6,
    title: " Kasa ",
    type: "img",
    src: "",
    img: " assets/img/projects/project-6.webp ",
    project: "Website",
    client: "OpenClassRooms",
    langages: "HTML, CSS, SCSS, React Router, Javascript, Node.Js",
    previewLink: (
      <a href="https://github.com/CharlieLechauve/Projet8_Kasa" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    ),
    frenchDescription: " Création d'un site One Page avec Create React app. Code réalisé en SCSS afin d'assurer la réutilisation des composants ",
    englishDescription: " Creation of a One Page site with Create React App. Code written in SCSS to ensure component reusability ",
  },
  {
    id: 7,
    title: "Nina Carducci",
    type: "img",
    src: "",
    img: " assets/img/projects/project-7.webp ",
    project: "SEO",
    client: "OpenClassRooms",
    langages: "SEO, Accessibility, performance optimisation",
    previewLink: (
      <div>
        <a href="https://github.com/CharlieLechauve/P9_NinaCarducci" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <br />
        <a href="https://charlielechauve.github.io/P9_NinaCarducci/" target="_blank" rel="noopener noreferrer">
          Website
        </a>
      </div>
    ),
    frenchDescription: " Optimisation de l'expérience utilisateur, des performances et du référencement d'un site internet ",
    englishDescription: " Optimization of user experience, performance, and SEO of a website ",
  },
  {
    id: 8,
    title: "724 Event",
    type: "img",
    src: "",
    img: " assets/img/projects/project-8.webp ",
    project: "Website Debug",
    client: "OpenClassRooms",
    langages: " React Dev Tools, Tests, Node.js ",
    previewLink: (
      <a href="https://github.com/CharlieLechauve/P10_724Events" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    ),
    frenchDescription: " Débug et optimisation d'un site internet évènementiel. Amélioration et corrections des appels API, utilisations de test et réalisation d'un cahier de recette ",
    englishDescription: " Debugging and optimization of an event website. Improving and correcting API calls, using testing, and creating a test plan ",
  },
  {
    id: 9,
    title: "ArgentBank",
    type: "img",
    src: "",
    img: " assets/img/projects/project-9.webp ",
    project: "Website",
    client: "OpenClassRooms",
    langages: "Javascript, React, Redux, Vite.js, Node.js, API, MongoDB",
    previewLink: (
      <a href="https://github.com/CharlieLechauve/P11_ArgentBank" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    ),
    frenchDescription: " Création d'une application bancaire en React, Node.Js et MongoDB. Gestion des connexions d'utilisateurs, accès aux comptes, modifications des données et réflexion sur des appels API pour améliorer la gestion du site en phase 2 ",
    englishDescription: " Creating a banking application in React, Node.js, and MongoDB. Managing user logins, accessing accounts, modifying data, and planning API calls to enhance site management in Phase 2. ",
  },
];

const Portfolio = () => {
  const { popupToggle, language } = useContext(Context);
  return (
    <SectionContainer id="portfolio">
      <div className="w-full pb-60">
        {/* Section Title Starts */}
        <SectionTitle
          bigTitle={language === "FR" ? "projets" : "works"}
          colorTitle={"portfolio"}
          normalTitle={language === "FR" ? "mon" : "my"}
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
