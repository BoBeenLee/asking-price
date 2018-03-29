import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import _ from 'lodash';
import withPriceState, { initialState, makeContracts, addContracts, substractPrice } from './price';

describe("price", () => {
    const normalNextPrice = {
        id: 2,
        originId: 1,
        type: 'B',
        amount: 1000,
        count: 1000
    };

    const makeMockState = (name, id, amount, count) => {
        return {
            ...initialState,
            [name]: {
                1: {
                    id,
                    type: name === 'buying' ? 'B' : 'S',
                    amount,
                    count
                }
            }
        }
    };

    const sellingState = makeMockState('selling', 1, 1000, 1000);
    const buyingState = makeMockState('buying', 1, 1000, 1000);

    it('make correctly contracts', () => {
        const { nextPrice, contracts } = (makeContracts(normalNextPrice)({
            1: {
                id: 1,
                amount: 100,
                count: 1000
            }
        }));
        expect(nextPrice.count).toBe(0);
        expect(contracts.length).toBe(1);
    });

    it('add correctly contracts', () => {
        const result = addContracts('buying', normalNextPrice, sellingState, 'asc');
        expect(_.keys(result.contract).length).toBe(1);
    });


    it('can substract price', () => {
        const result = substractPrice('buying', normalNextPrice, buyingState);
        expect(_.keys(result.buying).length).toBe(0);
    });

    it('should be not empty price with priceState', () => {
        const component = sinon.spy(() => null)
        const WithPriceState = withPriceState(component);
        const wrapper = mount(<WithPriceState />);

        const { plusPrice } = component.firstCall.args[0];
        plusPrice({
            id: 1,
            type: "S",
            amount: 100,
            count: 1,
            createdAt: new Date()
        })
        const { selling } = component.lastCall.args[0];
        // console.log(_.keys(selling));
        expect(_.keys(selling).length).toBe(1);
    });
    it('should be empty price. do not match type', () => {
        const component = sinon.spy(() => null)
        const WithPriceState = withPriceState(component);
        const wrapper = mount(<WithPriceState />);

        const { plusPrice } = component.firstCall.args[0];
        plusPrice({
            id: 1,
            type: "F",
            amount: 100,
            count: 1
        })
        const { selling } = component.lastCall.args[0];
        // console.log(_.keys(selling));
        expect(_.keys(selling).length).toBe(0);
    });
});

