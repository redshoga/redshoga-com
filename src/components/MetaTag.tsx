import Head from "next/head";

export type Props = {
  title?: string;
};

export const MetaTag: React.FC<Props> = (props) => {
  return (
    <Head>
      <title>redshoga.com{props.title && ` | ${props.title}`}</title>
      <link rel="icon" type="shortcut icon" href="/favicon.png" />
    </Head>
  );
};
