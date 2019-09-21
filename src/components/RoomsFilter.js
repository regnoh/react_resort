import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";
// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const RoomsFilter = ({ rooms }) => {
  // react hooks
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;

  // get unique types
  let types = getUnique(rooms, "type");
  // add all
  types = ["all", ...types];
  // map to jsx
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  // get unique capacity
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  return (
    <section>
      <Title title="search rooms" />
      <form>
        <div className="form-row mb-3 justify-content-center">
          {/* select type */}
          <div className="col-lg-2 mr-2">
            <label htmlFor="type" className=" text-capitalize">
              type
            </label>
            <select
              name="type"
              id="type"
              onChange={handleChange}
              className="form-control"
              value={type}
            >
              {types}
            </select>
          </div>
          {/* end of select type */}
          {/* guests  */}
          <div className="col-lg-2 mr-2">
            <label htmlFor="capacity" className=" text-capitalize">
              Guests
            </label>
            <select
              name="capacity"
              id="capacity"
              onChange={handleChange}
              className="form-control"
              value={capacity}
            >
              {people}
            </select>
          </div>
          {/* end of guests */}
          {/* room price */}
          <div className="col-lg-2 mr-2">
            <label htmlFor="price" className=" text-capitalize">
              price ${price}
            </label>
            <input
              type="range"
              name="price"
              min={minPrice}
              max={maxPrice}
              id="price"
              value={price}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          {/* end of room price*/}
          {/* size */}
          <div className="col-lg-2 mr-2">
            <label className="text-capitalize" htmlFor="price">
              size
            </label>
            <input
              className="form-control"
              type="number"
              name="minSize"
              value={minSize}
              onChange={handleChange}
            />{" "}
            <input
              className="form-control"
              type="number"
              name="maxSize"
              value={maxSize}
              onChange={handleChange}
            />
          </div>
          {/* end of select size */}
          {/* extras */}
          <div className="col-lg-2 mr-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="breakfast"
                id="breakfast"
                checked={breakfast}
                onChange={handleChange}
              />
              <label
                className="form-check-label text-capitalize"
                htmlFor="breakfast"
              >
                breakfast
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="pets"
                checked={pets}
                onChange={handleChange}
              />
              <label
                className="form-check-label  text-capitalize"
                htmlFor="breakfast"
              >
                pets
              </label>
            </div>
          </div>
          {/* end of extras type */}
        </div>
      </form>
    </section>
  );
};

export default RoomsFilter;
