import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Star = styled.img`
  height: 30px;
  width: 30px;
  &:hover {
    cursor: pointer;
  }
`

interface PropTypes {
  imgSrc: string;
}
function RatingStar({ imgSrc }: PropTypes): ReactElement {
  return <Star src={imgSrc} alt="rating star" />;
}

export default RatingStar;