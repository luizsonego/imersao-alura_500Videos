import React from 'react';
import propTypes from 'prop-types';

import styled, { css } from 'styled-components';
import Menu from '../Header';
import Footer from '../Footer';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-right: 5%;
  padding-left: 5%;
  ${({ paddingAll }) => css`
    padding: ${paddingAll};
  `}
`;

function PageDefault({ children, paddingAll }) {
  return (
    <>
      <Menu />
      <Main paddingAll={paddingAll}>{children}</Main>
      <Footer />
    </>
  );
}

PageDefault.defaultProps = {
  children: '',
  paddingAll: '',
};

PageDefault.propTypes = {
  children: propTypes.string,
  paddingAll: propTypes.string,
};

export default PageDefault;
