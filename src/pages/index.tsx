import type { NextPage } from "next";
import { contentItems } from "../contants/contentItems";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { format } from "date-fns";
import Image from "next/image";
import arrayUniq from "array-uniq";

const Tags: React.FC<{
  tags: {
    label: string;
    value: string;
  }[];
  onClick: (v: string) => void;
}> = (props) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {props.tags.map((tag, idx) => (
        <button
          key={idx}
          className="border px-2 rounded-full bg-gray-100 text-sm text-gray-600 hover:bg-gray-300"
          onClick={() => props.onClick(tag.value)}
        >
          {tag.label}
        </button>
      ))}
    </div>
  );
};

const Page: NextPage = () => {
  const [searchText, setSearchText] = useState("");
  const searchWords = searchText.trim().split(/\s+/);
  const searchedContentItems =
    searchWords.length === 0
      ? contentItems
      : contentItems
          .filter(
            (item) =>
              searchWords.some((searchWord) =>
                item.title.includes(searchWord)
              ) ||
              searchWords.some((searchWord) =>
                item.tags.some((t) => t === searchWord)
              )
          )
          .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  const tagsSummary: { label: string; value: string }[] = (() => {
    const allTags = contentItems.map((v) => v.tags).flat();
    const uniqTags = arrayUniq(allTags);
    return uniqTags
      .map((tagName) => ({
        name: tagName,
        count: allTags.filter((v) => v === tagName).length,
      }))
      .sort((a, b) => b.count - a.count)
      .map((v) => ({
        label: `${v.name} (${v.count})`,
        value: v.name,
      }));
  })();

  return (
    <>
      <div className="flex justify-center relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <MagnifyingGlassIcon width={20} />
        </div>
        <input
          type="search"
          className="border-4 rounded-full pl-10 pr-4 py-1 w-full focus-visible:border-gray-400 focus-visible:outline-none"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          aria-label="検索"
        />
      </div>

      <div className="mt-4">
        <Tags tags={tagsSummary} onClick={(v) => setSearchText(v)} />
      </div>

      <ul className="mt-10">
        {searchedContentItems.length === 0 && (
          <>
            <span className="font-bold">{searchText}</span>
            に一致するコンテンツは見つかりませんでした。
          </>
        )}
        {searchedContentItems.map((item) => (
          <li
            key={`${item.title}-${item.overview}`}
            className="mb-10 flex flex-col gap-1"
          >
            <div className="flex gap-2">
              <div className="flex-1 flex flex-col gap-2">
                <Tags
                  tags={item.tags.map((v) => ({ value: v, label: v }))}
                  onClick={(v) => setSearchText(v)}
                />
                <a
                  href={item.url}
                  className="text-lg font-bold hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.title}
                </a>
                <div className="text-gray-600">{item.overview}</div>
                <div className="text-gray-600">
                  {format(item.createdAt, "yyyy/MM/dd")}
                </div>
              </div>
              {item.imgHref && (
                <a
                  href={item.url}
                  className="hover:underline rounded-lg border flex"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="rounded-lg object-cover w-64 h-64 align-middle"
                    src={item.imgHref}
                    width={128}
                    height={128}
                    alt=""
                  />
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Page;
