import React from "react";
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'react-emotion';
import Chart from "./";


const Root = styled('div') `

`;


storiesOf("Chart", module)
    .addDecorator(getStory => <Root>{getStory()}</Root>)
    .add("with Chart", () => (
        <Chart />
    ));