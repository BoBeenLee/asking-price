import React from "react";
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Title from "./";

storiesOf("Title", module)
    .add("with Title", () => (
        <Title>Title</Title>
    ));