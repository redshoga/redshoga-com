import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import { serviceConfig } from "../contants/serviceConfig";
import { serviceLinks } from "../contants/serviceLinks";

export const MetaTag: React.FC = () => (
  <Head>
    <title>{serviceConfig.title}</title>
    <link rel="icon" type="shortcut icon" href="/icon.png" />
  </Head>
);

const Header = () => {
  return (
    <header className="flex flex-col items-center">
      <div className="mb-4">
        <Image
          src="/icon.png"
          alt=""
          width="80"
          height="80"
          className="rounded-full"
        />
      </div>

      <h1 className="font-bold text-3xl mb-2">{serviceConfig.title}</h1>

      <p className="mb-8">{serviceConfig.description}</p>

      <div className="flex gap-4 justify-center">
        {serviceLinks.map(({ iconHref, siteUrl, alt, size }, idx) => (
          <Link href={siteUrl} passHref key={idx}>
            <a
              className="w-10 h-10 rounded-full bg-gray-100 flex justify-center items-center hover:bg-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={iconHref} alt={alt} height={size} width={size} />
            </a>
          </Link>
        ))}
      </div>
    </header>
  );
};

const AppContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <div className="px-4 py-20">{children}</div>;

const MainContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="flex justify-center mt-10">
    <div className="max-w-md w-full">{children}</div>
  </div>
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContainer>
      <MetaTag />
      <Header />
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
    </AppContainer>
  );
}

export default MyApp;
