import type { NextPage } from "next";
import { MetaTag } from "@/components/commons/MetaTag";

const Page: NextPage = () => {
  return (
    <>
      <MetaTag />
      <div>ページが存在しません。</div>
    </>
  );
};

export default Page;
