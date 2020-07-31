import React from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';
import Menu from '../Header';
import Footer from '../Footer';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
`;

function PageDefault({ children }) {
  return (
    <>
      <Menu />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

PageDefault.defaultProps = {
  children: '',
};

PageDefault.propTypes = {
  children: propTypes.string,
};

export default PageDefault;
