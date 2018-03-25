import React from "react";
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'react-emotion';
import _ from 'lodash';
import theme from './theme';

const Root = styled('div') `
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const ColorBox = styled('div') `
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px;
`;

const ColorItem = styled('div') `
    display: inline-block;
    width: 50px;
    height: 50px;
    margin: 10px;
    background-color: ${props => props.color};
`;

storiesOf("Theme", module)
    .add("with Theme", () => (
        <Root>
            {_.map(theme, (color, key) => {
                return <ColorBox>
                    <ColorItem key={key} color={color} />
                    {key}
                </ColorBox>;
            })}
        </Root>
    ));