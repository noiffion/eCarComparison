import React, { useState, useEffect, ReactElement } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import CSS from 'csstype';
import CarOusel from './CarOusel';
import apiReqs from '../../API/apiReqs';
import { ICar } from '../../Interfaces';

interface Styles {
  detailsSection: CSS.Properties;
  carName: CSS.Properties;
}
const st: Styles = {
  detailsSection: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  carName: {
    color: '#2f4f4f',
    fontSize: '40px',
    margin: '2vh 0',
  },
};

function CarDetails(): ReactElement {
  const [car, setCar] = useState<ICar | null>(null);
  const { carId } = useParams();

  useEffect((): void => {
    apiReqs
      .getOneCar(carId)
      .then((respCar) => setCar(respCar))
      .catch(console.error);
  }, [carId]);

  return (
    <section style={st.detailsSection}>
      {!car ? (
        <span>place of the spinner</span>
      ) : (
        <>
          <h3 style={st.carName}>{`${car?.manufacturer} ${car?.name}`}</h3>
          <CarOusel car={car} />
        </>
      )}
    </section>
  );
}

export default withRouter(CarDetails);
