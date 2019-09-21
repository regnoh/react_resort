import React from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import BackgroundSection from "../components/BackgroundSection";
const Error = () => {
  return (
    <BackgroundSection>
      <Banner title="404" subtitle="page not found">
        <Link to="/" className="btn-primary">
          return home
        </Link>
      </Banner>
    </BackgroundSection>
  );
};

export default Error;
