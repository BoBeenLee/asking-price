import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { Timeline as AntdTimeline } from 'antd';
import Timeline from './';

describe('TimeLine', () => {
    it('should have a TimeLine', () => {
        const props = {
            contract: {}
        };
        const wrapper = mount(<Timeline
            {...props}
        />);
        expect(wrapper.find(Timeline).length).toBe(1);
    });
});