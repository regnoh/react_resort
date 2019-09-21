import React from "react";
import { Link } from "react-router-dom";
import BackgroundSection from "../components/BackgroundSection";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
const Home = () => {
  return (
    <div>
      <BackgroundSection>
        <Banner title="Hello world" subtitle="Welcome to our beach hotel">
          <Link to="/rooms" className="btn btn-primary text-capitalize">
            our rooms
          </Link>
        </Banner>
      </BackgroundSection>
      <Services />
      <FeaturedRooms />
    </div>
  );
};

export default Home;
