import type { NextPage } from "next";
import { MetaTag } from "../components/MetaTag";
import { accounts } from "../contants/accounts";

const Page: NextPage = () => {
  return (
    <>
      <MetaTag title="Account" />
      <ul className="list-disc">
        {accounts.map((account, idx) => (
          <li className="ml-4" key={idx}>
            <a href={account.url} className={"text-main hover:opacity-70"}>
              {account.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Page;
