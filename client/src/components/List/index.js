import React from 'react';
import { Table } from 'antd';
import _ from 'lodash';
import styled from 'react-emotion';
import withPriceState from '../../hocs/price';

const Root = styled('div') `
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 30px;
`;

const columns = [{
    title: '타입',
    dataIndex: 'type',
    key: 'type',
}, {
    title: '수량',
    dataIndex: 'count',
    key: 'count',
}, {
    title: '금액',
    dataIndex: 'amount',
    key: 'amount',
}];

const List = (props) => {
    const { selling, buying } = props;

    const sellingSortByAmountDesc = _.orderBy(_.map(selling, item => ({ key: item.id, ...item })), ['amount'], ['desc']);
    const buyingSortByAmountDesc = _.orderBy(_.map(buying, item => ({ key: item.id, ...item })), ['amount'], ['desc']);

    const dataSource = [...sellingSortByAmountDesc, ...buyingSortByAmountDesc];
    // console.log(dataSource);
    return (
        <Root>
            <Table
                pagination={false}
                dataSource={dataSource} columns={columns} />
        </Root>
    );
};

export default withPriceState(List);