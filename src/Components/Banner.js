import React from "react";


const data = [
  "https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50",
];

function UncontrolledExample() {
  return (
  
      {data.map((img) => (
      
          <img className="d-block w-100" src={img} alt="First slide" />
       
      ))}
  
  );
}

export default UncontrolledExample;
