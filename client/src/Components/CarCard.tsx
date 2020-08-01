import React from 'react';

interface PropTypes {
  carName: string;
  cardPicSrc: string;
}
function Car({ carName, cardPicSrc }: PropTypes): React.ReactElement {
  return (
    <article>
      <p>{carName}</p>
      <img src={cardPicSrc} alt={`${carName} thumbnail`} />
    </article>
  );
}

export default Car;
