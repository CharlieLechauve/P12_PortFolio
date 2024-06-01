"use client";
import { Context } from "@/context/context";
import { Fragment, useContext } from "react";
const Css = () => {
  const { color } = useContext(Context);
  return (
    <Fragment>
      <link rel="stylesheet" href={`/assets/css/skins/${color}.css`} />
    </Fragment>
  );
};
export default Css;
