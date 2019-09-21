import React from "react";
import Room from "./Room";

const RoomsList = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <div className="container">
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  }
  return (
    <div className="container my-3">
      <div className="row">
        {rooms.map(room => {
          return (
            <div className="col-6 col-md-4 col-lg-3 my-3" key={room.id}>
              <Room room={room} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoomsList;
