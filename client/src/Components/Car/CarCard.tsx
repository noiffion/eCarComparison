import React, { ReactElement } from 'react';
import CSS from 'csstype';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ICar } from '../index.d';

interface Styles {
  article: CSS.Properties;
  carInfo: CSS.Properties;
  carInfoTitle: CSS.Properties;
}
const CarImg = styled.img`
  width: 100%;
  max-width: 420px;
  height: auto;
  max-height: 250px;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    border: none;
  }
`;
const Logo = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  max-height: 150px;
  margin-top: 2vh;
`;
const SLink = styled(Link)`
  text-decoration: none;
  color: #2f4f4f;
  font-size: 24px;
  &:hover {
    color: #000000;
    text-decoration: underline;
  }
`;

interface PropTypes {
  car: ICar;
  isFromLeft: boolean;
}
function Car({ car, isFromLeft }: PropTypes): ReactElement {
  const backgroundColor = isFromLeft ? 'to left, #98fb98, #ffffff' : 'to right, #3cb371, #ffffff';
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

  const cardPicSrc = car.cardPics && (isFromLeft ? car.cardPics[0] : car.cardPics[1]);
  const carShadow = isFromLeft
    ? { boxShadow: '-5px 5px 10px #888888' }
    : { boxShadow: '5px 5px 10px #888888' };
  const carImg = (
    <CarImg src={cardPicSrc} alt={`${car.name} thumbnail`} style={carShadow} loading="lazy" />
  );

  return (
    <article style={st.article}>
      <Link to={`/carBrochure/${car._id}`}> {isFromLeft && carImg} </Link>
      <div style={st.carInfo}>
        <h3 style={st.carInfoTitle}>
          <SLink to={`/carBrochure/${car._id}`}>
            {car.manufacturer} {car.name}
          </SLink>
        </h3>
        <Logo src={car.logo} alt={`${car.manufacturer} logo`} />
      </div>
      <Link to={`/carBrochure/${car._id}`}> {!isFromLeft && carImg} </Link>
    </article>
  );
}

export default Car;
