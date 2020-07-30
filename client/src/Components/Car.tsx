import React from 'react';

interface PropTypes {
  car: string;
  addOrRemove: boolean;
}

function Car(): React.ReactElement {
  return (
    <>
      <p>car</p>
    </>
  );
}

export default Car;
