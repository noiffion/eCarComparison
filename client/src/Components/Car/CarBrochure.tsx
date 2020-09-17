import React, { useState, useEffect, ReactElement } from 'react';
import { useParams, withRouter, Link } from 'react-router-dom';
import { Button } from '@zendeskgarden/react-buttons';
import { Dots } from '@zendeskgarden/react-loaders';
import styled from 'styled-components';
import CSS from 'csstype';
import CarOusel from './CarOusel';
import apiReqs from '../../API/apiReqs';
import { ICar } from '../index.d';

interface Styles {
  detailsSection: CSS.Properties;
  carName: CSS.Properties;
  titleBox: CSS.Properties;
  logo: CSS.Properties;
  baseInfo: CSS.Properties;
  loader: CSS.Properties;
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
  titleBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    marginLeft: '1vw',
    width: '100px',
    height: '100px',
  },
  baseInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '3vh',
    width: '70vw',
    color: '#2f4f4f',
    fontSize: '24px',
  },
  loader: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
  },
};

const SLink = styled(Link)`
  margin-top: 6vh;
  text-decoration: none;
`;
const SButton = styled(Button)`
  font-size: 36px;
  border-color: #2f4f4f;
  color: #2f4f4f;
  width: 100%;
  &:hover {
    background-color: #f0ffff;
    border-color: #00ff00;
    color: #00ff00;
  }
`;

function CarBrochure(): ReactElement {
  const [car, setCar] = useState<ICar | null>(null);
  interface ParamType {
    carId: string;
  }
  const { carId } = useParams<ParamType>();

  useEffect((): void => {
    apiReqs
      .getOneCar(carId)
      .then((respCar) => setCar(respCar))
      .catch(console.error);
  }, [carId]);

  const carPrice = `${car?.msrp.toString().slice(0, 2)},${car?.msrp.toString().slice(2)}`;
  return (
    <section style={st.detailsSection}>
      {!car ? (
        <div style={st.loader}>
          <Dots color="#00ff00" size="100px" delayMS={500} />
        </div>
      ) : (
        <>
          <div style={st.titleBox}>
            <h2 style={st.carName}> {`${car?.manufacturer} ${car?.name}`}</h2>
            <img src={car.logo} style={st.logo} alt={`${car.manufacturer} logo`} />
          </div>
          <CarOusel car={car} />
          <div style={st.baseInfo}>
            <span>
              Model: {car.manufacturer} {car.name}
            </span>
            <span> Starting price: ${carPrice} </span>
            <span>Powertrain: {car.powertrain}</span>
          </div>
          <SLink to={`/comparison/${carId}`}>
            <SButton>Compare</SButton>
          </SLink>
        </>
      )}
    </section>
  );
}

export default withRouter(CarBrochure);
