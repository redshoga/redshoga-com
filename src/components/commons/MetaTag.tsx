import Head from "next/head";
import { serviceConfig } from "@/constants/serviceConfig";

export const MetaTag: React.FC<{
  title?: string;
}> = (props) => (
  <Head>
    <title>
      {props.title
        ? `${props.title} | ${serviceConfig.title}`
        : serviceConfig.title}
    </title>
    <link rel="icon" type="shortcut icon" href="/profile/icon.png" />
    <link rel="apple-touch-icon" href="/profile/icon.png" />
    <meta name="description" content={serviceConfig.metaDescription} />
  </Head>
);
