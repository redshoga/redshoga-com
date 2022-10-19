import type { NextPage } from "next";
import { contentItems } from "../contants/contentItems";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { format } from "date-fns";

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
        />
      </div>

      <ul className="mt-10">
        {searchedContentItems.length === 0 && (
          <>
            <span className="font-bold">{searchText}</span>
            に一致するコンテンツは見つかりませんでした。
          </>
        )}
        {searchedContentItems.map((item, idx) => (
          <li key={idx} className="mb-10 flex flex-col gap-1">
            <div className="flex gap-2">
              {item.tags.map((tag, idx) => (
                <button
                  key={idx}
                  className="border px-2 rounded-full bg-gray-100 text-sm text-gray-600"
                  onClick={() => setSearchText(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
            <a
              href={item.url}
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-lg font-bold">{item.title}</div>
            </a>
            <div className="text-gray-600">{item.overview}</div>
            <div className="text-gray-600">
              {format(item.createdAt, "yyyy/MM/dd")}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Page;
