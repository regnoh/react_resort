import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Room = ({ room }) => {
  const { slug, price, images, name } = room;
  return (
    <div className="card room">
      <div className="img-container position-relative">
        <div className="position-absolute">
          <div className="bg-dark text-light text-center">
            <h6>${price}</h6>
          </div>
        </div>
        <img className="card-img-top" src={images[0]} alt={name} />
        <div className="featured_link">
          <Link to={`/rooms/${slug}`} className="text-light bg-grey">
            <h6>Featured</h6>
          </Link>
        </div>
      </div>
      <div className="card-footer">{name}</div>
    </div>
  );
};
Room.propTypes = {
  room: PropTypes.shape({
    slug: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    images: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};
export default Room;
