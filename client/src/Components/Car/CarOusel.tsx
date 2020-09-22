import React, { useState, useEffect, useCallback, ReactElement } from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';
import { ICar } from '../index.d';

interface PropTypes {
  car: ICar;
}
const CarOusel = ({ car }: PropTypes): ReactElement => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mainViewportRef, embla] = useEmblaCarousel();
  const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    selectedClass: '',
  });

  const onThumbClick = useCallback(
    (index) => {
      if (!embla || !emblaThumbs) return;
      if (emblaThumbs.clickAllowed()) embla.scrollTo(index);
    },
    [embla, emblaThumbs]
  );

  const onSelect = useCallback(() => {
    if (!embla || !emblaThumbs) return;
    setSelectedIndex(embla.selectedScrollSnap());
    emblaThumbs.scrollTo(embla.selectedScrollSnap());
  }, [embla, emblaThumbs, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on('select', onSelect);
  }, [embla, onSelect]);

  return (
    <article style={{ width: '70%' }}>
      <div className="embla">
        <div className="embla__viewport" ref={mainViewportRef}>
          <div className="embla__container">
            {car && car.detailPics && car.detailPics.map((imgSrc, index) => {
              const imgName = imgSrc.match(/details\/(.+)$/);
              return (
                <div className="embla__slide" key={index}>
                  <div className="embla__slide__inner">
                    <img
                      className="embla__slide__img"
                      src={imgSrc}
                      alt={imgName ? imgName[1] : "car image"}
                    />
                  </div>
                </div>
            )})}
          </div>
        </div>
      </div>

      <div className="embla embla--thumb">
        <div className="embla__viewport" ref={thumbViewportRef}>
          <div className="embla__container embla__container--thumb">
            {car && car.detailPics && car.detailPics.map((imgSrc, index) => {
              const imgName = imgSrc.match(/details\/(.+)$/);
              return (
                <div
                  key={`${car.manufacturer} ${car.name} ${index}`}
                  className={`embla__slide embla__slide--thumb
                    ${index === selectedIndex ? 'is-selected' : ''}
                  `}
                >
                  <button
                    onClick={() => onThumbClick(index)}
                    className="embla__slide__inner embla__slide__inner--thumb"
                    type="button"
                  >
                    <img
                      className="embla__slide__thumbnail"
                      src={imgSrc}
                      alt={imgName ? imgName[1] : "car image"}
                      loading="lazy"
                    />
                  </button>
                </div>
            )})}
          </div>
        </div>
      </div>
    </article>
  );
};

export default CarOusel;
