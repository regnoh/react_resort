import React, { Component } from "react";
import { FaCocktail } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        id: 1,
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      },
      {
        id: 2,
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      },
      {
        id: 3,
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
      }
    ]
  };
  render() {
    return (
      <div className="services py-5">
        <div className="container">
          <Title title="our Services" />
          <div className="row">
            {this.state.services.map(item => {
              return (
                <article
                  key={item.id}
                  className="text-center col-6 col-md-4 my-3"
                >
                  <p className="icon-primary">{item.icon}</p>
                  <h6>{item.title}</h6>
                  <p>
                    <small>{item.info}</small>
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
