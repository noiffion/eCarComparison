import React from 'react';
import Car from '../Components/Car';

interface PropTypes {
  car: string;
  addOrRemove: boolean;
}

function CarList(): React.ReactElement {
  return (
    <section>
      <h2>carlist</h2>
      <Car />
    </section>
  );
}

export default CarList;
