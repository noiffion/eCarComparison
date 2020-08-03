import React from 'react';

interface Click {
  (): void;
}
interface PropTypes {
  selected: boolean;
  onClick: Click;
  imgSrc: string;
}
const Thumb = ({ selected, onClick, imgSrc }: PropTypes): React.ReactElement => (
  <div className={`embla__slide embla__slide--thumb ${selected ? 'is-selected' : ''}`}>
    <button
      onClick={onClick}
      className="embla__slide__inner embla__slide__inner--thumb"
      type="button"
    >
      <img className="embla__slide__thumbnail" src={imgSrc} alt="A cool cat." />
    </button>
  </div>
);

export default Thumb;
