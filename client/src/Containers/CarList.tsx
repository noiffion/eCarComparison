import React, { useContext } from 'react';
import CarCard from '../Components/CarCard';
import { Ctx, Context } from '../Context';
import { ICar } from '../Interfaces';

function CarList(): React.ReactElement {
  const { carList } = useContext<Context>(Ctx);
  const cars = carList.map((car: ICar, ind) => {
    const cardPicSrc = ind % 2 === 0 ? car.cardPics[0] : car.cardPics[1];
    return <CarCard key={`${car.name}_CarCard`} carName={car.name} cardPicSrc={cardPicSrc} />;
  });
  return <section>{cars}</section>;
}

export default CarList;
