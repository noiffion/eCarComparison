import React, { ReactElement, Dispatch, SetStateAction } from 'react';
import { Button } from '@zendeskgarden/react-buttons';
import styled from 'styled-components';
import CSS from 'csstype';
import { ICar } from '../index.d';

interface Styles {
  carInfo: CSS.Properties;
  carImg: CSS.Properties;
  carDetailP: CSS.Properties;
  carDetail: CSS.Properties;
  carName: CSS.Properties;
}
const st: Styles = {
  carInfo: {
    display: 'flex',
    flexDirection: 'column',
    width: '40%',
    fontSize: '26px',
  },
  carName: {
    margin: '3vh',
  },
  carImg: {
    width: '420px',
    height: '250px',
    boxShadow: '5px 5px 10px #888888',
  },
  carDetailP: {
    marginTop: '2.5vh',
  },
  carDetail: {
    color: '#00ff00',
  },
};

const SButton = styled(Button)`
  margin-top: 2vh;
  margin-left: 8vw;
  font-size: 20px;
  border-color: #2f4f4f;
  color: #2f4f4f;
  width: 50%;
  &:hover {
    background-color: #f0ffff;
    border-color: #00ff00;
    color: #00ff00;
  }
`;

interface PropTypes {
  car: ICar;
  isLeft: boolean;
  setSecondCar: Dispatch<SetStateAction<ICar | undefined>>;
}
function CarCol({ car, isLeft, setSecondCar }: PropTypes): ReactElement {
  const carPrice = `${car.msrp.toString().slice(0, 2)},${car.msrp.toString().slice(2)}`;
  return (
    <article style={st.carInfo}>
      <p style={st.carName}>
        Model: <span style={st.carDetail}>{`${car.manufacturer} ${car.name}`}</span>
      </p>
      <img
        src={isLeft ? car.cardPics[0] : car.cardPics[1]}
        style={st.carImg}
        alt={`${car.manufacturer} ${car.name}`}
      />
      <p style={st.carDetailP}>
        Starting price: <span style={st.carDetail}>${carPrice}</span>
      </p>
      <p style={st.carDetailP}>
        Class: <span style={st.carDetail}>{car.class}</span>
      </p>
      <p style={st.carDetailP}>
        Doors: <span style={st.carDetail}>{car.doors}</span>
      </p>
      <p style={st.carDetailP}>
        Manufacturer: <span style={st.carDetail}>{car.manufacturer}</span>
      </p>
      <p style={st.carDetailP}>
        Powertrain: <span style={st.carDetail}>{car.powertrain}</span>
      </p>
      <p style={st.carDetailP}>
        Range: <span style={st.carDetail}>{car.range}</span>
      </p>
      <p style={st.carDetailP}>
        Rating: <span style={st.carDetail}>{car.rating}</span>
      </p>
      {!isLeft && <SButton onClick={() => setSecondCar(undefined)}>New comparison</SButton>}
    </article>
  );
}

export default CarCol;
