import type { NextPage } from "next";
import { MetaTag } from "../components/MetaTag";
import { articles } from "../contants/articles";

const Page: NextPage = () => {
  return (
    <>
      <MetaTag />
      <ul>
        {articles.map((article, idx) => (
          <li key={idx} className="mt-4">
            <a href={article.url} className="text-main hover:opacity-70">
              <div className="text-sub text-sm">{article.createdAt}</div>
              <div>{article.title}</div>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Page;
