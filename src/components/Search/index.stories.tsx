import React, { useState } from "react";
import { ComponentMeta } from "@storybook/react";

import { Search } from "./";

export default {
  title: "Search",
  component: Search,
} as ComponentMeta<typeof Search>;

export const Defalut = () => {
  const [searchText, setSearchText] = useState("");
  return <Search searchText={searchText} setSearchText={setSearchText} />;
};
