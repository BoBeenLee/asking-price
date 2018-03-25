import React from "react";
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import List from "./";


storiesOf("List", module)
    .add("with List", () => (
        <List />
    ));
