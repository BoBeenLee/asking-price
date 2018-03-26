import React from "react";
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Timeline from "./";


storiesOf("TimeLine", module)
    .add("with Timeline", () => (
        <Timeline />
    ));