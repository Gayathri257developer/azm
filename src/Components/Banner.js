import React from "react";
import Carousel from "react-bootstrap/Carousel";

const data = [
  "https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
];

function UncontrolledExample() {
  return (
    <Carousel style={{ marginTop: "2px", height: "200px" }}>
      {data.map((img) => (
        <Carousel.Item>
          <img className="d-block w-100" src={img} alt="First slide" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default UncontrolledExample;
