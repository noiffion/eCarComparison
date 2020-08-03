import React, { useContext, ReactElement } from 'react';
import CSS from 'csstype';
import CarCard from '../Components/CarCard';
import { Ctx, Context } from '../Context';
import { ICar } from '../Interfaces';

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

function CarList(): ReactElement {
  const { eCarList } = useContext<Context>(Ctx);

  const cars = eCarList.map((car: ICar, ind) => {
    const isFromLeft = ind % 2 === 0;
    return <CarCard key={`${car.name}_CarCard`} car={car} isFromLeft={isFromLeft} />;
  });

  return <section style={st.mainSection}>{cars}</section>;
}

export default CarList;
