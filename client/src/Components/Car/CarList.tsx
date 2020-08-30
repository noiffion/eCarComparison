import React, { ReactElement } from 'react';
import CSS from 'csstype';
import CarCard from './CarCard';
import { ICar } from '../index.d';

interface Styles {
  mainSection: CSS.Properties;
}
const st: Styles = {
  mainSection: {
    display: 'flex',
    flexDirection: 'column',
    width: '70vw',
  },
};

interface PropTypes {
  eCarList: ICar[];
}
function CarList({ eCarList }: PropTypes): ReactElement {
  const cars = eCarList.map((car: ICar, ind) => {
    const isFromLeft = ind % 2 === 0;
    return <CarCard key={`${car.name}_CarCard`} car={car} isFromLeft={isFromLeft} />;
  });

  return <section style={st.mainSection}>{cars}</section>;
}

export default CarList;
