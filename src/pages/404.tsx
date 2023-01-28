import type { NextPage } from "next";
import { MetaTag } from "../components/MetaTag";

const Page: NextPage = () => {
  return (
    <>
      <MetaTag />
      <div>ページが存在しません。</div>
    </>
  );
};

export default Page;
