import React, { Component } from 'react';
import _ from 'lodash';
import styled from 'react-emotion';
import Header from './components/Header';
import Footer from './components/Footer';
import AskingPrice from './organizations/AskingPrice';

const Root = styled('div') `
  display: grid;
  grid-template-areas:
    "header"
    "content"
    "footer";
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  height: 100%;
`;

const HeaderBox = styled('header') `
  grid-area: header;
`;

const ContentBox = styled('div') `
  grid-area: content;
`;

const FooterBox = styled('footer') `
  grid-area: footer;
`;


class App extends Component {
  render() {
    return (
      <Root>
        <HeaderBox>
          <Header />
        </HeaderBox>
        <ContentBox>
          <AskingPrice />
        </ContentBox>
        <FooterBox>
          <Footer />
        </FooterBox>
      </Root>);
  }
}

export default App;