import { MicroCMSListContent } from "microcms-js-sdk";
import { Content } from "../../libs/cmsClient";
import { Tags } from "../Tags";

export type Props = {
  contents: (Content & MicroCMSListContent)[];
  searchText: string;
  setSearchText: (searchValue: string) => void;
};

export const Contents: React.FC<Props> = (props) => {
  return (
    <ul>
      {props.contents.length === 0 && (
        <>
          <span className="font-bold">{props.searchText}</span>
          に一致するコンテンツは見つかりませんでした。
        </>
      )}
      {props.contents.map((item) => (
        <li key={item.id} className="mb-8 flex flex-col justify-start gap-1">
          <div className="flex gap-2">
            <div className="flex-1 flex flex-col">
              <a className="hover:underline mb-2" href={item.link}>
                <div className="font-bold">{item.title}</div>
                <div className="text-gray-500 text-xs">{item.description}</div>
                <div className="text-gray-500 text-xs">{item.createdAt}</div>
              </a>
              <Tags
                tags={item.tags.map((v) => ({ value: v.name, label: v.name }))}
                onClick={props.setSearchText}
              />
            </div>
            {item.thumbnail && (
              <a className="hover:underline" href={item.link}>
                <img
                  src={item.thumbnail.url}
                  className="object-cover h-24 w-24 rounded-xl border dark:border-gray-500"
                />
              </a>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};
