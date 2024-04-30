import React from "react";

function CoreConcepts({ image, title, description }) {
  return (
    <div>
      <img src={image} />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default CoreConcepts;
