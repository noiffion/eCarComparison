import React, { ReactElement } from 'react';
import CSS from 'csstype';

interface Styles {
  star: CSS.Properties;
}
const st: Styles = {
  star: {
    height: '30px',
    width: '30px',
  },
};

interface PropTypes {
  imgSrc: string;
}
function RatingStar({ imgSrc }: PropTypes): ReactElement {
  return <img src={imgSrc} style={st.star} alt="rating star" />;
}

export default RatingStar;
