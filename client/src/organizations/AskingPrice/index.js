import React, { Component, Fragment } from "react";
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import _ from 'lodash';
import withPriceState from '../../hocs/price';
import { lifecycle } from 'recompose';
import { getTargetContracts, isTargetContract, isDiffPrice } from '../../hocs/priceHelper';
import Title from '../../components/Title';
import Chart from '../../components/Chart';
import List from '../../components/List';
import Timeline from '../../components/Timeline';

const Root = styled('div') `
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    padding: 20px;
    height: 100%;
`;

const PriceTitle = styled(Title) `
    grid-column: 1/5;
    margin-top: 10px;
`;

const ContractTitle = styled(Title) `
    font-size: 18px;
    margin-bottom: 20px;
`;

const Contract = styled('div') `
    grid-column: 1;
`;

const lifecyclePrice = lifecycle({
    componentWillReceiveProps(nextProps) {
        const { selling, buying, price = {}, plusPrice, addContract } = this.props;
        const { price: nextPrice } = nextProps;

        if (isDiffPrice(price, nextPrice) && isTargetContract(selling, buying, nextPrice)) {
            addContract(nextPrice);
        } else if (isDiffPrice(price, nextPrice)) {
            plusPrice(nextPrice);
        }
    }
});

class AskingPrice extends Component {
    static propTypes = {
    }
    static defaultProps = {
    }

    render() {
        const { selling,
            sellingSortByCreatedAt,
            buying,
            buyingSortByCreatedAt,
            contract, price } = this.props;

        return (<Root>
            <PriceTitle>호가창</PriceTitle>
            <Contract>
                <ContractTitle>체결가</ContractTitle>
                <Timeline contract={contract} />
            </Contract>
            <Chart price={price} />
            <List
                selling={selling}
                buying={buying}
            />
        </Root>);
    }
}

export default withPriceState(lifecyclePrice(AskingPrice));