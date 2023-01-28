import {
  NextPage,
  GetStaticPaths,
  InferGetStaticPropsType,
  GetStaticPropsContext,
} from "next";
import { ParsedUrlQuery } from "querystring";
import { MetaTag } from "../../components/MetaTag";
import { cmsClient } from "../../libs/cmsClient";

type Params = ParsedUrlQuery & {
  contentId: string;
};

const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  props
) => {
  return (
    <>
      <MetaTag title={props.pageDetail.title} />
      <main
        className="prose mb-8 dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: props.pageDetail.body }}
      />
    </>
  );
};

export const getStaticProps = async (
  context: GetStaticPropsContext<Params>
) => {
  if (!context.params?.contentId) throw new Error();
  const pageDetail = await cmsClient.getPageDetail({
    contentId: context.params?.contentId,
  });
  return {
    props: {
      pageDetail,
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => ({
  paths: (await cmsClient.getPageContentIdList()).map((value) => ({
    params: {
      contentId: value,
    },
  })),
  fallback: false,
});

export default Page;
