import React, { Component } from "react";
import { RoomContext } from "../context";
import Room from "./Room";
import Title from "./Title";
import Loading from "./Loading";
export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    let { loading, featuredRooms: rooms } = this.context;

    const renderRooms = rooms.map(room => {
      return (
        <div className="col-6 col-md-4 col-lg-3 my-3">
          <Room key={room.id} room={room} />
        </div>
      );
    });
    return (
      <section className="py-3">
        <Title title="our rooms" />
        <div className="container text-center">
          <div className="row">{loading ? <Loading /> : renderRooms}</div>
        </div>
      </section>
    );
  }
}
