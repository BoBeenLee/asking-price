import React from 'react';
import { mount } from 'enzyme';
import { withPriceState } from './price';

describe("price", () => {
    it('price with priceState', () => {
        const EmptyComponent = () => null;
        const WithPriceState = withPriceState(props => <EmptyComponent {...props} />);
        const wrapper = mount(<WithPriceState />);

        wrapper.find(EmptyComponent).props().addPrice({
            type: "B",
            amount: 100,
            count: 1
        });
        console.log(wrapper.find(EmptyComponent).props().selling);
        // expect(wrapper.find(EmptyComponent).props().selling).toEqual(1);
    });
});

