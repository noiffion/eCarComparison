import React, { ReactElement, Dispatch, SetStateAction } from 'react';
import CSS from 'csstype';
import styled from 'styled-components';
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

const Star = styled.img`
  height: 30px;
  width: 30px;
  &:hover {
    cursor: pointer;
  }
`;

interface PropTypes {
  editable: boolean;
  rateCar: number;
  setRateCar: Dispatch<SetStateAction<number>>;
}
function RatingStar({ editable, rateCar, setRateCar }: PropTypes): ReactElement {
  const changeStarColor = (nthStar: number) => setRateCar(nthStar);

  const stars = new Array(5).fill(null).map((_, i) => {
    const imgSrc = i + 1 > rateCar ? starEmpty : starFull;
    const displayStar = (
      <img
        src={imgSrc}
        style={st.star}
        alt="rating star"
        key={Symbol(i).toString()}
      />
    );
    const editableStar = (
      <Star
        src={imgSrc}
        style={st.star}
        alt="rating star"
        key={Symbol(i).toString()}
        onClick={(event) => changeStarColor(i + 1)}
      />
    );
    return editable ? editableStar : displayStar;
  });
  return <> {stars} </>;
}

export default RatingStar;
