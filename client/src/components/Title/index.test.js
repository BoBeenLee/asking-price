import React from 'react';
import renderer from 'react-test-renderer';

import Title from './';

describe('title', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<Title>title</Title>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});