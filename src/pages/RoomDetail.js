import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RoomContext } from "../context";
import defaultBcg from "../images/room-1.jpeg";
import Banner from "../components/Banner";
const RoomDetail = ({ match }) => {
  const context = useContext(RoomContext);
  const room = context.getRoom(match.params.slug);
  if (!room) {
    return (
      <div className="alert alert-warning" role="alert">
        <h3>no such room could be found...</h3>
        <Link to="/rooms" className="btn-primary">
          back to rooms
        </Link>
      </div>
    );
  }
  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images
  } = room;
  return (
    <>
      <BackgroundStyled img={images[0]}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn btn-primary text-capitalize">
            back to rooms
          </Link>
        </Banner>
      </BackgroundStyled>
      <section className="container py-5">
        <div className="row">
          {images.map((_, index) => {
            return (
              <div className="col col-md-3">
                <img className="img-thumbnail" key={index} src={_} alt={name} />
              </div>
            );
          })}
        </div>
        <div className="row py-3">
          <div className="col">
            <article>
              <h3>details</h3>
              <p>{description}</p>
            </article>
          </div>
          <div className="col">
            <article>
              <h3>info</h3>
              <h6>price: $ {price}</h6>
              <h6>size: {size} SQFT</h6>
              <h6>
                max capacity:{" "}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row">
          <h6>extral</h6>
        </div>
        <div className="row">
          <ul>
            {extras.map((_, index) => {
              return <li key={index}>- {_}</li>;
            })}
          </ul>
          <div className="col"></div>
        </div>
      </section>
    </>
  );
};

export default RoomDetail;
export const BackgroundStyled = styled.header`
  min-height: 60vh;
  background: url(${props => (props.img ? props.img : defaultBcg)});
  display: flex;
  justify-content: center;
  align-items: center;
`;
