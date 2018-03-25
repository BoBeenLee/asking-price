import React, { Component } from "react";
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import moment from 'moment';
import _ from 'lodash';
import { VictoryChart, VictoryAxis, VictoryTheme, VictoryStack, VictoryArea, VictoryLine, VictoryGroup } from 'victory';
import theme from '../../constants/theme';
import withPriceState from '../../hocs/price';

const axisStyles = {
    axisLabel: { fontSize: 10, padding: 30 },
    tickLabels: { fontSize: 6 }
};

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

        return (<VictoryChart
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
                    interpolation="natural"
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
                    interpolation="natural"
                    style={{
                        data: { stroke: theme.buyingColor },
                        parent: { border: "1px solid #ccc" }
                    }}
                />
            </VictoryGroup>
        </VictoryChart>);
    }
}

export default withPriceState(Chart);
