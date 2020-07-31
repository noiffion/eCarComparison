import React from 'react';

interface PropTypes {}
// css-in-js declarations
const st = {
  footer: {
    border: '1px solid gray',
  },
};

function MainFoot(): React.ReactElement {
  return (
    <nav style={st.footer}>
      <ul>
        <li>Footer</li>
      </ul>
    </nav>
  );
}

export default MainFoot;
