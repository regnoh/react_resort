import React from "react";
import { Link } from "react-router-dom";
import BackgroundSection from "../components/BackgroundSection";
import Banner from "../components/Banner";
import RoomsContainer from "../components/RoomsContainer";
const Rooms = () => {
  return (
    <div>
      <BackgroundSection className="rooms-bgsection">
        <Banner title="our rooms">
          <Link className="btn btn-primary text-capitalize" to="/">
            return home
          </Link>
        </Banner>
      </BackgroundSection>
      <RoomsContainer />
    </div>
  );
};

export default Rooms;
