import { configure } from "@storybook/react";
import _ from 'lodash';

const req = require.context("../src", true, /.stories.js$/);

function loadStories() {
  // addDecorator(withThemes);
  _.forEach(req.keys(), req);
}

configure(loadStories, module);
