import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import { serviceConfig } from "../contants/serviceConfig";
import { serviceLinks } from "../contants/serviceLinks";
import { useRouter } from "next/router";
import { navLinks } from "../contants/navLinks";

export const MetaTag: React.FC = () => (
  <Head>
    <title>{serviceConfig.title}</title>
    <link rel="icon" type="shortcut icon" href="/icon.png" />
    <link rel="apple-touch-icon" href="/icon.png" />
    <meta name="description" content={serviceConfig.metaDescription} />
  </Head>
);

const Header = () => {
  const router = useRouter();

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

      <div className="flex gap-4 justify-center mb-8">
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

      <ul className="flex gap-4">
        {navLinks.map((link, idx) => (
          <li
            key={idx}
            className={link.active(router.asPath) ? "font-bold" : ""}
          >
            <Link href={link.href}>
              <a className="hover:underline">{link.label}</a>
            </Link>
          </li>
        ))}
      </ul>
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
