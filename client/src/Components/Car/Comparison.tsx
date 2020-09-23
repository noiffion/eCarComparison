import React, { useState, useEffect, ReactElement } from 'react';
import CSS from 'csstype';
import { useParams, withRouter } from 'react-router-dom';
import { Dots } from '@zendeskgarden/react-loaders';
import { Dropdown, Menu, Item, Field, Select, Label } from '@zendeskgarden/react-dropdowns';
import apiReqs from '../../API/apiReqs';
import CarCol from './CarCol';
import { ICar } from '../index.d';

interface Styles {
  compareContainer: CSS.Properties;
  compareCar: CSS.Properties;
  loader: CSS.Properties;
}
const st: Styles = {
  compareContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '70%',
    paddingBottom: '4vh',
  },
  compareCar: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: '10vh',
    width: '40%',
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

function Comparison(): ReactElement {
  const [eCarList, setECarList] = useState<ICar[]>([]);
  const [firstCar, setFirstCar] = useState<ICar | undefined>(undefined);
  const [secondCar, setSecondCar] = useState<ICar | undefined>(undefined);
  interface ParamType {
    carId: string;
  }
  const { carId } = useParams<ParamType>();

  useEffect(() => {
    apiReqs
      .getECars()
      .then((cars) => {
        setECarList(cars);
        const baseCar = cars.filter((car) => car._id === carId)[0];
        setFirstCar(baseCar);
      })
      .catch(console.error);
  }, [carId]);

  const carSelect = (
    <Dropdown
      selectedItem={secondCar}
      onSelect={(car) => setSecondCar(car)}
      downshiftProps={{ itemToString: (car: ICar) => car && car.name }}
    >
      <Field>
        <Label>Select a model</Label>
        <Select>{secondCar ? `${secondCar.manufacturer} ${secondCar.name}` : ''}</Select>
      </Field>
      <Menu>
        {eCarList.map((car) => (
          <Item key={car.name} value={car}>
            {`${car.manufacturer} ${car.name}`}
          </Item>
        ))}
      </Menu>
    </Dropdown>
  );

  const columns = (baseCar: ICar, compareCar: ICar | undefined) => {
    return compareCar ? (
      <>
        <CarCol car={baseCar} isLeft setSecondCar={setSecondCar} />
        <CarCol car={compareCar} isLeft={false} setSecondCar={setSecondCar} />
      </>
    ) : (
      <>
        <CarCol car={baseCar} isLeft setSecondCar={setSecondCar} />
        <div style={st.compareCar}> {carSelect} </div>
      </>
    );
  };
  const loader = (
    <div style={st.loader}>
      <Dots color="#00ff00" size="100px" delayMS={500} />
    </div>
  );

  return (
    <section style={st.compareContainer}>
      {!firstCar ? loader : columns(firstCar, secondCar)}
    </section>
  );
}

export default withRouter(Comparison);
