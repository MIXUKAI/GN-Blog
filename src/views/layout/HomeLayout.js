import React from 'react';
import styled from 'styled-components';

import Footer from '../../components/Footer';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  margin: 0 auto;
  max-width: 960px;
  min-height: 840px;
  padding: 50px 20px 20px 20px;
  overflow: hidden;
  background-color: rgba(255,255,255,1);
  box-shadow: 1px 1px 15px rgba(67,38,100,0.05);
`;

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      [
        <div style={{ padding: '40px 0', backgroundColor: '#F6F9FC' }} 
          key='home-container'
          className="home-container">
          <Wrapper className="home-wrapper">
            {children}
          </Wrapper>
        </div>
        ,
        <Footer key="footer" />
      ]
    );
  }
}

export default Layout;