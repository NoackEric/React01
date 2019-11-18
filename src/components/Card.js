import React from 'react';

function Card(props) {
  return (
    <figure>
      <img src={props.linkUrl} />
      <figcaption>
        <h2>{props.title}</h2>
      </figcaption>

    </figure>

  );
}

export default Card;
