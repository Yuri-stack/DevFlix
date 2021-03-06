import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding: 50px 5% 0;
`;

function PageTemplate({ children }) {
  return (
    <>
      <Menu />
      <Main>
        { children }
      </Main>
      <Footer />
    </>
  );
}

PageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PageTemplate;
