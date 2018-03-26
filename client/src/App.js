import React, { Component } from 'react';
import _ from 'lodash';
import styled from 'react-emotion';
import { ThemeProvider } from 'emotion-theming';
import { Query, Mutation, Subscription, graphql } from "react-apollo";
import gql from "graphql-tag";

import Header from './components/Header';
import Footer from './components/Footer';
import AskingPrice from './organizations/AskingPrice';
import theme from './constants/theme';
import 'antd/dist/antd.css';

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

const MAKE_PRICES_MUTATION = gql`
    mutation makePriceMutation{
        makePrices {
            isSuccess
        }
    }`;

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

  componentDidMount() {
    // console.log(this.props.data);
    // this.props.mutate({});
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Root>
          <HeaderBox>
            <Header />
          </HeaderBox>
          <ContentBox>
            <Subscription
              subscription={PRICES_SUBSCRIPTION}
            >
              {({ data, loading }) => {
                return <AskingPrice price={_.get(data, 'price.node')} />;
              }}
            </Subscription>
          </ContentBox>
          <FooterBox>
            <Footer />
          </FooterBox>
        </Root>
      </ThemeProvider>
    );
  }
}

export default graphql(MAKE_PRICES_MUTATION, {
  options: {
    ignoreResults: true
  }
})(App);