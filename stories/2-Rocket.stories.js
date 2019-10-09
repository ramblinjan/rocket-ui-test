import React from "react";
import { linkTo } from "@storybook/addon-links";
import Rocket from "../src/components/Rocket";

export default {
  title: "Rocket"
};

/*
 * Props:
 *  
 *  - Rocket ID
 *  - Cost per launch
 *  - Description
 * 
 */

const props = {
  id: 1,
  costPerLaunch: 6700000,
  description: "This is a launch!"
};

export const toStorybook = () => <Rocket {...props} />;

toStorybook.story = {
  name: "Rocket"
};
