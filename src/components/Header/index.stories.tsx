import React, { useState } from "react";
import { ComponentMeta } from "@storybook/react";

import { Header } from "./index";

export default {
  title: "Header",
  component: Header,
} as ComponentMeta<typeof Header>;

export const Defalut = () => {
  return <Header />;
};
