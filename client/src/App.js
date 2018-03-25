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
    const { addPrice, selling, buying } = this.props;
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
              addPrice(_.get(data, "price.node"));
              console.log(data.price.node);
            }
            return (
              <Chart selling={selling} buying={buying} />
            );
          }}
        </Subscription>
        <footer>
          <Footer />
        </footer>
      </Root>);
  }
}

export default withPriceState(App);