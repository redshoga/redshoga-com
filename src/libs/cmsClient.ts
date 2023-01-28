import {
  createClient,
  MicroCMSImage,
  MicroCMSListContent,
} from "microcms-js-sdk";

const client = createClient({
  serviceDomain: process.env.MICRO_CMS_DOMAIN || "",
  apiKey: process.env.MICRO_CMS_API_KEY || "",
});

// コンテンツ (トップページ)
export type Content = {
  title: string;
  description: string;
  link: string;
  tags: (Tag & MicroCMSListContent)[];
  thumbnail: MicroCMSImage | null;
};

// コンテンツ用のタグ
export type Tag = {
  name: string;
};

// 固定ページ
export type Page = {
  title: string;
  body: string;
};

export const cmsClient = {
  getAllTags: async () => {
    return client.getList<Tag>({ endpoint: "tags" });
  },
  getAllContents: async () => {
    return client.getList<Content>({ endpoint: "contents" });
  },
  getPageDetail: async (args: { contentId: string }) => {
    return client.getListDetail<Page>({
      endpoint: "pages",
      contentId: args.contentId,
    });
  },
  getPageContentIdList: async () => {
    return (
      await client.getList<Page>({
        endpoint: "pages",
      })
    ).contents.map((v) => v.id);
  },
};
