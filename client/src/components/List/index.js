import React from 'react';
import { Table } from 'antd';
import _ from 'lodash';
import withPriceState from '../../hocs/price';

const List = (props) => {
    const { selling, buying } = props;

    const sellingSortByAmountDesc = _.orderBy(_.map(selling, _.identity), ['amount'], ['desc']);
    const buyingSortByAmountDesc = _.orderBy(_.map(buying, _.identity), ['amount'], ['desc']);

    const dataSource = [...sellingSortByAmountDesc, ...buyingSortByAmountDesc];
    // console.log(dataSource);
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

    return (
        <Table
            pagination={false}
            dataSource={dataSource} columns={columns} />
    );
};

export default withPriceState(List);