import React, { ReactElement, useState } from 'react';
import CSS from 'csstype';
import starEmpty from '../../Images/ratingStar.png';
import starFull from '../../Images/ratingStarFull.png';

interface Styles {
  star: CSS.Properties;
}
const st: Styles = {
  star: {
    height: '30px',
    width: '30px',
  },
};

interface PropTypes {
  carRating: number;
}
function RatingStar({ carRating }: PropTypes): ReactElement {
  const [rateCar, setRateCar] = useState<number>(carRating!);

  const stars = new Array(5).fill(null).map((_, i) => {
    const imgSrc = i + 1 > rateCar ? starEmpty : starFull;
    return <img src={imgSrc} style={st.star} alt="rating star" key={Symbol(i).toString()}/>;
  });

  return <> {stars} </>;
}

export default RatingStar;
