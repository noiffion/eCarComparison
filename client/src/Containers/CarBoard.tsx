import React from 'react';

interface PropTypes {
  movie: string;
  addOrRemove: boolean;
}

const CarBoard: React.FC<PropTypes> = ({ movie, addOrRemove }: PropTypes) => {
  return (
    <main>
      <h1>{addOrRemove ? movie : null}</h1>
    </main>
  );
};

export default CarBoard;
