import React from 'react';

interface PropTypes {
  car: string;
  addOrRemove: boolean;
}

function CarBoard({ car, addOrRemove }: PropTypes): React.ReactElement {
  return (
    <main>
      <h1>{addOrRemove ? car : null}</h1>
    </main>
  );
}

export default CarBoard;
