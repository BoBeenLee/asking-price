import React, { Component, Fragment } from "react";
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Query, Subscription } from "react-apollo";
import gql from "graphql-tag";
import Chart from '../../components/Chart';
import List from '../../components/List';

const Root = styled('div') `
    display: grid;
    grid-template-columns: 70% 30%;
    padding: 20px;
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
class AskingPrice extends Component {
    static propTypes = {
    }
    static defaultProps = {
    }
    render() {
        return (<Root>
            <Subscription
                subscription={PRICES_SUBSCRIPTION}
            >
                {({ data, loading }) => {
                    return (
                        <Fragment>
                            <Chart price={_.get(data, 'price.node')} />
                            <List price={_.get(data, 'price.node')} />
                        </Fragment>
                    );
                }}
            </Subscription>
        </Root>);
    }
}

export default AskingPrice;
