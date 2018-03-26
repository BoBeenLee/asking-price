import React, { Component } from "react";
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import moment from 'moment';
import _ from 'lodash';
import { lifecycle } from 'recompose';
import withPriceState from '../../hocs/price';
import { getTargetContracts, isTargetContract, isDiffPrice } from '../../hocs/priceHelper';
import { VictoryChart, VictoryAxis, VictoryTheme, VictoryStack, VictoryArea, VictoryLine, VictoryGroup } from 'victory';
import theme from '../../constants/theme';

const axisStyles = {
    axisLabel: { fontSize: 10, padding: 30 },
    tickLabels: { fontSize: 6 }
};

const Root = styled('div') `
    margin-top: -80px;
`;

export const lifecyclePrice = lifecycle({
    componentWillReceiveProps(nextProps) {
        const { selling, buying, price = {}, plusPrice, addContract } = this.props;
        const { price: nextPrice } = nextProps;

        if (isDiffPrice(price, nextPrice)) {
            plusPrice(nextPrice);
        }
    }
});

class Chart extends Component {
    _transformChartData = (itemMap, items) => {
        return _.map(items, item => {
            const { createdAt, amount } = itemMap[item.id];
            return {
                ...itemMap[item.id],
                x: new Date(createdAt),
                y: amount
            };
        });
    };

    /**
     * x : 시간, y : 금액
     */
    render() {
        const { selling, sellingSortByCreatedAt, buying, buyingSortByCreatedAt } = this.props;
        return (<Root><VictoryChart
            height={250}
            theme={VictoryTheme.material}
        >
            <VictoryAxis
                label="Time"
                scale="time"
                standalone={false}
                tickCount={4}
                tickFormat={
                    (x) => {
                        return moment(x).format('mm:ss');
                    }
                }
                style={axisStyles}
            />
            <VictoryAxis
                dependentAxis
                label="Amount"
                scale="linear"
                standalone={false}
                tickFormat={
                    (y) => {
                        return y;
                    }
                }
                style={axisStyles}
            />
            <VictoryGroup
                scale={{ x: "time", y: "linear" }}
                standalone={false}
                name="selling"
                data={this._transformChartData(selling, sellingSortByCreatedAt)}
            >
                <VictoryLine
                    style={{
                        data: { stroke: theme.sellingColor },
                        parent: { border: "1px solid #ccc" }
                    }}
                />
            </VictoryGroup>
            <VictoryGroup
                scale={{ x: "time", y: "linear" }}
                standalone={false}
                name="buying"
                data={this._transformChartData(buying, buyingSortByCreatedAt)}
            >
                <VictoryLine
                    style={{
                        data: { stroke: theme.buyingColor },
                        parent: { border: "1px solid #ccc" }
                    }}
                />
            </VictoryGroup>
        </VictoryChart></Root>);
    }
}

export default withPriceState(lifecyclePrice(Chart));
