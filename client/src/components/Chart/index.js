import React, { Component } from "react";
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import _ from 'lodash';
import { VictoryChart, VictoryAxis, VictoryTheme, VictoryStack, VictoryLine, VictoryGroup } from 'victory';

import { withPriceState } from '../../hocs/price';

class Chart extends Component {
    componentWillReceiveProps(nextProps) {
        const { price, addPrice } = this.props;
        const { price: nextPrice } = this.props;
        if (nextPrice && price.id !== nextPrice.id) {
            addPrice(nextPrice);
        }
    }

    /**
     * x : 시간, y : 금액
     */
    render() {
        const { selling, buying } = this.props;

        const s1 = [
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 7 }
        ];

        const s2 = [
            { x: 2, y: 2 },
            { x: 3, y: 3 },
            { x: 4, y: 5 },
            { x: 5, y: 4 },
            { x: 6, y: 7 }
        ];

        return (<VictoryChart
            domainPadding={10}
            theme={VictoryTheme.material}
        >
            <VictoryGroup
                data={s1}
                color="blue"
            >
                <VictoryLine
                    style={{
                        data: { stroke: "blue" },
                        parent: { border: "1px solid #ccc" }
                    }}
                    data={s1}
                />
            </VictoryGroup>
            <VictoryGroup
                data={s2}
                color="red"
            >
                <VictoryLine
                    style={{
                        data: { stroke: "#c43a31" },
                        parent: { border: "1px solid #ccc" }
                    }}
                    data={[
                        { x: 1, y: 2 },
                        { x: 2, y: 3 },
                        { x: 3, y: 5 },
                        { x: 4, y: 4 },
                        { x: 5, y: 7 }
                    ]}
                />
            </VictoryGroup>
        </VictoryChart>);
    }
}

export default withPriceState(Chart);
