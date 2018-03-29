import React from 'react';
import { Table } from 'antd';
import _ from 'lodash';
import styled from 'react-emotion';
import theme from '../../constants/theme';

const Root = styled('div') `
    display: flex;
    flex-direction: column;
    justify-content: top;
    padding-right: 30px;
`;

const LIST_COLUMNS = [{
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

const TYPE_COLOR_MAP = {
    B: {
        color: '#eee',
        backgroundColor: theme.buyingColor
    },
    S: {
        color: '#eee',
        backgroundColor: theme.sellingColor
    }
};

const sortByAmountDesc = (collection) => _.orderBy(_.map(collection, item => ({ key: item.id, ...item })), ['amount'], ['desc']);

const List = (props) => {
    const { selling, buying } = props;

    const sellingSortByAmountDesc = sortByAmountDesc(selling);
    const buyingSortByAmountDesc = sortByAmountDesc(buying);

    const dataSource = [...sellingSortByAmountDesc, ...buyingSortByAmountDesc];
    // console.log(dataSource);
    return (
        <Root>
            <Table
                pagination={false}
                onRow={(record, index) => {
                    return {
                        style: {
                            ...TYPE_COLOR_MAP[record.type]
                        }
                    };
                }}
                scroll={{ x: '100%', y: 400 }}
                dataSource={dataSource} columns={LIST_COLUMNS} />
        </Root>
    );
};

export {
    sortByAmountDesc
};

export default List;