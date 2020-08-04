import React, { useState, useEffect, useCallback, ReactElement } from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';
import { ICar } from '../../Interfaces';

interface PropTypes {
  car: ICar;
}
const CarOusel = ({ car }: PropTypes): ReactElement => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [EmblaCarouselReact, embla] = useEmblaCarousel();
  const [EmblaCarouselReactThumbs, emblaThumbs] = useEmblaCarousel({
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
        <EmblaCarouselReact className="embla__viewport">
          <div className="embla__container">
            {car?.detailPics.map((imgSrc, index) => (
              <div className="embla__slide" key={`${car.manufacturer} ${car.name} ${index}`}>
                <div className="embla__slide__inner">
                  <img
                    className="embla__slide__img"
                    src={imgSrc}
                    alt={`${car.name} carousel ${index}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </EmblaCarouselReact>
      </div>

      <div className="embla embla--thumb">
        <EmblaCarouselReactThumbs className="embla__viewport">
          <div className="embla__container embla__container--thumb">
            {car?.detailPics.map((imgSrc, index) => (
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
                    alt="A cool cat."
                    loading="lazy"
                  />
                </button>
              </div>
            ))}
          </div>
        </EmblaCarouselReactThumbs>
      </div>
    </article>
  );
};

export default CarOusel;
