import React from "react";
import { ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Tags } from "./";

export default {
  title: "Tags",
  component: Tags,
} as ComponentMeta<typeof Tags>;

export const Defalut = () => {
  return (
    <Tags
      tags={[
        {
          label: "hoge",
          value: "hogeValue",
        },
        {
          label: "piyo",
          value: "piyoValue",
        },
      ]}
      onClick={action("onClick")}
    />
  );
};
