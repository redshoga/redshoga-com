import React from "react";
import { ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Contents } from "./index";
import { MicroCMSDate } from "microcms-js-sdk";

export default {
  title: "Contents",
  component: Contents,
} as ComponentMeta<typeof Contents>;

const cmsDate: MicroCMSDate = {
  createdAt: "2023-01-28T09:29:24.212Z",
  updatedAt: "2023-01-28T09:29:24.212Z",
  publishedAt: "2023-01-28T09:29:24.212Z",
  revisedAt: "2023-01-28T09:29:24.212Z",
};

export const Default = () => {
  return (
    <Contents
      contents={[
        {
          id: "content-id",
          ...cmsDate,
          link: "https://example.com",
          title: "タイトルタイトル",
          tags: [
            {
              id: "tag-id",
              name: "タグ",
              ...cmsDate,
            },
          ],
          description: "説明文説明文説明文",
          thumbnail: {
            url: "https://via.placeholder.com/150",
          },
        },
      ]}
      searchText={""}
      setSearchText={action("setSearchText")}
    />
  );
};

export const NoContents = () => {
  return (
    <Contents
      contents={[]}
      searchText={"hello"}
      setSearchText={action("setSearchText")}
    />
  );
};
