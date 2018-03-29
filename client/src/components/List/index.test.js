import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { Table } from 'antd';
import List, { sortByAmountDesc } from './';

describe('Chart', () => {
    it('should sort things by amount - desc', () => {
        const data = {
            1: {
                id: 1,
                amount: 1
            },
            2: {
                id: 2,
                amount: 3
            },
            3: {
                id: 3,
                amount: 2
            }
        };
        const nextData = [{
            key: 2,
            id: 2,
            amount: 3
        }, {
            key: 3,
            id: 3,
            amount: 2
        }, {
            key: 1,
            id: 1,
            amount: 1
        }];
        expect(sortByAmountDesc(data)).toEqual(nextData);
    });
    it('should have a Antd Table', () => {
        const props = {
            selling: {}, buying: {}
        };

        const wrapper = mount(<List
            {...props}
        />);
        expect(wrapper.find(Table).length).toBe(1);
    });
});