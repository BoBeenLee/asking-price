import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import _ from 'lodash';
import { Button } from 'antd';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from 'react-emotion';


const Root = styled('div') `
  text-align: center;
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
    return (
      <Query
        query={gql`
        {
          rates(currency: "USD") {
            currency
            rate
          }
        }
      `}>
        {({ loading, error, data }) => {
          return (<Root className="App">
            <header className="App-header">
              hello
        </header>
            <p className="App-intro">
              <Button>Hello World</Button>
            </p>
            {this._renderRates(data)}
          </Root>);
        }}
      </Query>);
  }
}

export default App;
