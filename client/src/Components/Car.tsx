import React, { useContext } from 'react';
import { MainCtx, IMainCtx } from '../Context/MainCtx';

interface PropTypes {
  car: string;
  addOrRemove: boolean;
}

function Car(): React.ReactElement {
  const contextValue = useContext(MainCtx);
  return (
    <>
      <p>car</p>
      <p>{contextValue}</p>
    </>
  );
}

export default Car;
