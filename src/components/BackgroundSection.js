import React from "react";

const BackgroundSection = ({ children, className }) => {
  return <header className={className}>{children}</header>;
};
BackgroundSection.defaultProps = {
  className: "default-bgsection"
};
export default BackgroundSection;
