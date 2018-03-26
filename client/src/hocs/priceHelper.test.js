import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import _ from 'lodash';
import { getTargetContracts, isDiffPrice } from './priceHelper';

describe("priceHelper", () => {
    it('should be not differ price', () => {
        const price = {};
        const nextPrice = { id: 1 };
        expect(isDiffPrice(price, nextPrice)).toBe(false);
    });

    it('should be differ price', () => {
        const price = {};
        const nextPrice = { id: 1 };
        expect(isDiffPrice(price, nextPrice)).toBe(true);
    });

    it('should be equal contract', () => {
        const selling = {
            1: {
                amount: 170,
                count: 1,
                type: 'S'
            }
        };
        const buying = {};
        const nextPrice = {
            amount: 170,
            count: 1,
            type: 'B'
        }
        expect(getTargetContracts(selling, buying, nextPrice)).toBe(true);
    });

    it('should not be equal contract', () => {
        expect(getTargetContracts({}, {}, {})).toBe(false);
        const selling = {
            amount: 170,
            count: 1,
            type: 'S'
        };
        const nextPrice = {
            amount: 160,
            count: 1,
            type: 'B'
        };
        expect(getTargetContracts(selling, buying, nextPrice)).toBe(false);
    });
});

