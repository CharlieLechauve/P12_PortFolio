// BioComponent.js
import { useContext } from "react";
import { Context } from "@/context/context";

const BioComponent = ({ englishBio, frenchBio }) => {
  const { language } = useContext(Context);
  const bio = language === "EN" ? englishBio : frenchBio;

  return (
    <div className="flex justify-between xs:justify-start font-Open-sans">
      {bio.map((item) => (
        <div
          className="basis-1/2 [&>div]:pb-20 [&>div:last-child]:pb-0 text-fs-15 xs:text-fs-14"
          key={item.id}
        >
          {item.data.map((bioItem) => (
            <div key={bioItem.id}>
              <span className="opacity-80">{bioItem.type} : </span>
              <span className="xs:block custom-md-2:block font-semibold">
                {bioItem.value}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BioComponent;
