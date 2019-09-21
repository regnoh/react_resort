import React from "react";

const Banner = ({ title, subtitle, children }) => {
  return (
    <div className="banner text-center py-2 px-5">
      <h1 className="text-capitalize">{title}</h1>
      <h6>{subtitle}</h6>
      {children}
    </div>
  );
};

export default Banner;
