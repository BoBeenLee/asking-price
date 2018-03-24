import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import _ from 'lodash';
import { Button } from 'antd';
import { Query, Subscription } from "react-apollo";
import gql from "graphql-tag";
import styled from 'react-emotion';
import Header from './components/Header';
import Footer from './components/Footer';

const Root = styled('div') `
  text-align: center;
`;

const PRICES_SUBSCRIPTION = gql`
  subscription onPriceAdded {
    price {
      node {
        id
        type
        count
        amount
      }
    }
  }
`;
class App extends Component {
  state = {
    selling: {},
    buying: {}
  };

  _renderRates = (data) => {
    if (_.isEmpty(data)) {
      return <div />;
    }
    return data.rates.map(({ currency, rate }) => (
      <div key={currency}>
        <p>{`${currency}: ${rate}`}</p>
      </div>
    ));
  }
  render() {
    return (
      <Root className="App">
        <header>
          <Header />
        </header>
        <Subscription
          subscription={PRICES_SUBSCRIPTION}
        >
          {({ data, loading }) => {
            if (data) {
              console.log(data.price.node);
            }
            return (
              <div>
                {/* {this._renderRates(data)} */}
              </div>
            );
          }}
        </Subscription>
        <footer>
          <Footer />
        </footer>
      </Root>);
  }
}

export default App;
