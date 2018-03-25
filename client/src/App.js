import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import _ from 'lodash';
import { Button } from 'antd';
import { Query, Subscription } from "react-apollo";
import gql from "graphql-tag";
import styled from 'react-emotion';
import Header from './components/Header';
import Footer from './components/Footer';
import Chart from './components/Chart';
import { withPriceState } from './hocs/price';

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


const PRICES_SUBSCRIPTION = gql`
  subscription onPriceAdded {
    price {
      node {
        id
        type
        count
        amount
        createdAt
      }
    }
  }
`;

class App extends Component {
  render() {
    return (
      <Root className="App">
        <HeaderBox>
          <Header />
        </HeaderBox>
        <ContentBox>
          <Subscription
            subscription={PRICES_SUBSCRIPTION}
          >
            {({ data, loading }) => {
              return (
                <Chart price={_.get(data, 'price.node')} />
              );
            }}
          </Subscription>
        </ContentBox>
        <FooterBox>
          <Footer />
        </FooterBox>
      </Root>);
  }
}

export default App;