import React from 'react';
import { shallow, mount } from 'enzyme';
import { VictoryChart, VictoryAxis, VictoryTheme, VictoryStack, VictoryArea, VictoryLine, VictoryGroup } from 'victory';
import sinon from 'sinon';
import Chart from './';

describe('Chart', () => {
    it('should have a Victory Component', () => {
        const { selling, sellingSortByCreatedAt, buying, buyingSortByCreatedAt } = {};

        const wrapper = mount(<Chart
            selling={{}}
            sellingSortByCreatedAt={[]}
            buying={{}}
            buyingSortByCreatedAt={[]}
        />);
        expect(wrapper.find(VictoryChart).length).toBe(1);
        expect(wrapper.find(VictoryLine).length).toBe(2);
    });
});