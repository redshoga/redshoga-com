import type { NextPage } from "next";
import { articles } from "../contants/articles";

// TODO
// ページング, タグフィルターの付与
const Page: NextPage = () => {
  return (
    <>
      <ul>
        {articles.map((article, idx) => (
          <li key={idx} className="mt-4">
            <a href={article.url} className="hover:opacity-70">
              <div className="text-lg font-bold">{article.title}</div>
              <div className="text-sub">{article.overview}</div>
              <div className="text-sub">{article.createdAt}</div>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Page;
