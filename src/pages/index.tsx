import type { InferGetStaticPropsType, NextPage } from "next";
import { useState } from "react";
import { Search } from "../components/Search";
import { Tags } from "../components/Tags";
import { MetaTag } from "../components/MetaTag";
import { cmsClient, Content } from "../libs/cmsClient";
import { MicroCMSListContent } from "microcms-js-sdk";
import { Contents } from "../components/Contents";

const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  props
) => {
  const [searchText, setSearchText] = useState("");
  const searchWords = searchText.trim().split(/\s+/);
  const searchedContentItems: (Content & MicroCMSListContent)[] =
    searchWords.length === 0
      ? props.contentList.contents
      : props.contentList.contents
          .filter(
            (item) =>
              searchWords.some((searchWord) =>
                item.title.includes(searchWord)
              ) ||
              searchWords.some((searchWord) =>
                item.tags.some((t) => t.name === searchWord)
              )
          )
          .sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
  const tags: { label: string; value: string }[] = props.tagList.contents.map(
    (tagDetail) => ({
      label: tagDetail.name,
      value: tagDetail.name,
    })
  );

  return (
    <>
      <MetaTag />

      <div className="flex justify-center relative mb-2">
        <Search searchText={searchText} setSearchText={setSearchText} />
      </div>

      <div className="mb-8">
        <Tags tags={tags} onClick={(v) => setSearchText(v)} />
      </div>

      <div className="mb-8">
        <Contents
          contents={searchedContentItems}
          searchText={searchText}
          setSearchText={setSearchText}
        />
      </div>
    </>
  );
};

export const getStaticProps = async () => ({
  props: {
    tagList: await cmsClient.getAllTags(),
    contentList: await cmsClient.getAllContents(),
  },
});

export default Page;
