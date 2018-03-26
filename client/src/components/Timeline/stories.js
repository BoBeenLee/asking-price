import React from "react";
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import _ from 'lodash';
import Timeline from "./";

const contract = {
    ..._.reduce(_.range(1, 5), (res, index) => {
        return {
            ...res, [index]: {
                id: index,
                amount: index,
                count: index * 100
            }
        }
    }, {})
};


storiesOf("TimeLine", module)
    .add("with Timeline", () => (
        <Timeline contract={contract} />
    ));