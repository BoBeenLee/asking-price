import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import _ from 'lodash';
import withPriceState from './price';

describe("price", () => {
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

