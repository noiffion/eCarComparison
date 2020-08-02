import React from 'react';
import CSS from 'csstype';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ICar } from '../Interfaces';

interface Styles {
  article: CSS.Properties;
  carInfo: CSS.Properties;
  carInfoTitle: CSS.Properties;
}
const CarImg = styled.img`
  width: 100%;
  max-width: 450px;
  height: auto;
  max-height: 250px;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
const Logo = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  max-height: 150px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;
  &:hover {
    text-decoration: underline;
  }
`;

interface PropTypes {
  car: ICar;
  isFromLeft: boolean;
}
function Car({ car, isFromLeft }: PropTypes): React.ReactElement {
  const backgroundColor = isFromLeft ? 'to left, #98FB98, #FFFFFF' : 'to right, #3CB371, #FFFFFF';
  const brdRadius = isFromLeft ? '0 0 20px 0' : '0 0 0 20px';
  const st: Styles = {
    article: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: isFromLeft ? 'flex-start' : 'flex-end',
      marginTop: '2vh',
      width: '100%',
    },
    carInfo: {
      backgroundImage: `linear-gradient(${backgroundColor})`,
      borderRadius: brdRadius,
      width: '50%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    carInfoTitle: {
      marginTop: '4vh',
    },
  };

  const cardPicSrc = isFromLeft ? car.cardPics[0] : car.cardPics[1];
  const carImg = <CarImg src={cardPicSrc} alt={`${car.name} thumbnail`} />;

  return (
    <article style={st.article}>
      <Link to={`/carDetails/${car._id}`}> {isFromLeft && carImg} </Link>
      <div style={st.carInfo}>
        <h3 style={st.carInfoTitle}>
          <StyledLink to={`/carDetails/${car._id}`}>
            {car.manufacturer} {car.name}
          </StyledLink>
        </h3>
        <Logo src={car.logo} alt={`${car.manufacturer} logo`} />
      </div>
      <Link to={`/carDetails/${car._id}`}> {!isFromLeft && carImg} </Link>
    </article>
  );
}

export default Car;
