import React, { useState, useEffect } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import apiReqs from '../API/apiReqs';
import { ICar } from '../Interfaces';

function CarDetails(): React.ReactElement {
  const [car, setCar] = useState<ICar | null>(null);
  const { carId } = useParams();

  useEffect((): void => {
    apiReqs
      .getOneCar(carId)
      .then((respCar) => setCar(respCar))
      .catch(console.error);
  }, [carId]);

  return (
    <>
      <p>{car && car.name}</p>
    </>
  );
}

export default withRouter(CarDetails);
