import { Context } from "@/context/context";
import { useContext, useEffect, useRef } from "react";

const Popup = () => {
  const { popup, popupToggle, dark, language } = useContext(Context);
  const popupRef = useRef(null);

  useEffect(() => {
    // Ajoute un gestionnaire d'événement pour écouter les clics en dehors de la popup
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        popupToggle(null); // Ferme la popup si le clic est en dehors
      }
    };

    // Ajoute l'écouteur d'événement au chargement du composant
    document.addEventListener("click", handleClickOutside);

    // Nettoyage du gestionnaire d'événement lors du démontage du composant
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [popupToggle]);

  return (
    <div className="portfolio">
      <div className="slideshow-open">
        <div className="slideshow bg-black">
          <figure
            ref={popupRef}
            className={`popup_figure bg-${
              dark ? "black-3" : "white"
            } p-30 overflow-auto rounded-10`}
          >
            {/* Project Details Starts */}
            <figcaption className="mb-15">
              <h3 className="uppercase leading-lh-1.2 text-accent pt-10 pb-28 font-bold text-center text-fs-33">
                {popup.title}
              </h3>
              <div className="flex flex-wrap font-Open-sans text-fs-15">

                <div className="w-1/2 xs:w-full mb-8">
                  <i className="fa fa-file-text-o pr-8" />
                  <span className="project-label"> 
                      Type 
                  </span>:{" "}
                  <span className="font-semibold">{popup.project}</span>
                </div>

                <div className="w-1/2 xs:w-full mb-8">
                  <i className="fa fa-user-o pr-8" />
                  <span className="project-label">
                      Client 
                  </span>:{" "}
                  <span className="font-semibold">{popup.client}</span>
                </div>

                <div className="w-1/2 xs:w-full mb-8">
                  <i className="fa fa-code pr-8" />
                  <span className="project-label">
                    {language === "FR" 
                    ? "Projets" 
                    : "Projects"} 
                  </span>:{" "}
                  <span className="font-semibold">{popup.langages}</span>
                </div>

                <div className="w-1/2 xs:w-full mb-8">
                  <i className="fa fa-external-link pr-8" />
                  <span className="project-label">
                    {language === "FR" 
                      ? "Aperçu" 
                      : "Preview"} 
                  </span>:{" "}
                  <span className="font-semibold">
                    <a
                      className="underline text-accent"
                      href={popup.previewLink}
                      target="_blank"
                    >
                      {popup.previewLink}
                    </a>
                  </span>
                </div>

                <div className="w-1 xs:w-full mb-8">
                  <i className="fa fa-file-text-o pr-8" />
                  <span className="project-label"> 
                    Description 
                  </span>:{" "}
                  <span className="font-semibold">
                  {language === "FR" 
                      ? popup.frenchDescription 
                      : popup.englishDescription}</span>
                </div>

              </div>
            </figcaption>
            {/* Project Details Ends */}
            {/* Main Project Content Starts */}
            {popup.type == "local_video" ? (
              <video
                id="video"
                className="responsive-video"
                controls
                poster={popup.img}
              >
                <source src={popup.src} type="video/mp4" />
              </video>
            ) : popup.type == "youtube" ? (
              <div className="videocontainer">
                <iframe
                  className="youtube-video"
                  src={popup.src}
                  allowFullScreen
                />
              </div>
            ) : (
              <img
                className="block w-full rounded-5"
                src={popup.img}
                alt="Portolio Image"
              />
            )}

            {/* Main Project Content Ends */}
          </figure>
          {/* Portfolio Navigation Starts */}
          
          {/* Portfolio Navigation Ends */}
        </div>
      </div>
    </div>
  );
};
export default Popup;
