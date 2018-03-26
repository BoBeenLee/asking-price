import React from 'react';
import styled from 'react-emotion';
import { Timeline as AntdTimeline } from 'antd';
import _ from 'lodash';
import theme from '../../constants/theme';

const Root = styled('div') `
    padding-top: 15px;
    padding-left: 15px;
`;

const Timeline = ({ contract, ...rest }) => {
    return (
        <Root {...rest}>
            <AntdTimeline>
                {_.map(contract, item => {
                    return (<AntdTimeline.Item color={theme.contractColor}>
                        {`체결가: ${item.amount}, 갯수: ${item.count}`}
                    </AntdTimeline.Item>);
                })}
            </AntdTimeline>
        </Root>
    );
};

export default Timeline;