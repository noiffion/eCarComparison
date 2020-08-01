import React from 'react';
import CSS from 'csstype';

interface Styles {
  footer: CSS.Properties;
  footerList: CSS.Properties;
}
const st: Styles = {
  footer: {
    marginTop: '5vh',
    border: '1px dotted gray',
  },
  footerList: {
    listStyleType: 'none',
  },
};

function MainFoot(): React.ReactElement {
  return (
    <nav style={st.footer}>
      <ul style={st.footerList}>
        <li>Footer</li>
      </ul>
    </nav>
  );
}

export default MainFoot;
