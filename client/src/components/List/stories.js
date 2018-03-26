import React from "react";
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import List from "./";

const selling = {
    "cjf8djnjp5x5i0146e9s44y7x": {
        "id": "cjf8djnjp5x5i0146e9s44y7x",
        "type": "S",
        "count": 800,
        "amount": 160,
        "createdAt": "2018-03-26T15:15:34.000Z"
    },
    "cjf8djp4c5x5r01465dw8ofvw": {
        "id": "cjf8djp4c5x5r01465dw8ofvw",
        "type": "S",
        "count": 800,
        "amount": 170,
        "createdAt": "2018-03-26T15:15:36.000Z"
    }
};

const buying = {
    "cjf8djgx45x550146hrm4ye5q": {
        "id": "cjf8djgx45x550146hrm4ye5q",
        "type": "B",
        "count": 1200,
        "amount": 170,
        "createdAt": "2018-03-26T15:15:25.000Z"
    },
    "cjf8djmr85x5f0146ita5xlgh": {
        "id": "cjf8djmr85x5f0146ita5xlgh",
        "type": "B",
        "count": 1000,
        "amount": 150,
        "createdAt": "2018-03-26T15:15:33.000Z"
    }
};


storiesOf("List", module)
    .add("with List", () => (
        <List selling={selling} buying={buying} />
    ));