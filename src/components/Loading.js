import React from "react";
import loadingGif from "../images/gif/loading-arrow.gif";
const Loading = ({ title }) => {
  return (
    <div className="text-center text-capitalize mt-5">
      <h4>{title}</h4>
      <img src={loadingGif} alt="" />
    </div>
  );
};

export default Loading;
