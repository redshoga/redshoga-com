/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { navLinks } from "../contants/navLinks";
import Head from "next/head";

export type Props = {
  children: React.ReactNode;
};

const Header = () => {
  return (
    <header className="flex flex-col items-center mb-10 mt-16">
      <Link href={"/"} passHref>
        <a className="flex flex-col items-center hover:opacity-70">
          <img
            src="/icon.png"
            alt="redshoga"
            className="w-20 sm:w-24 md:w-32 rounded-full mb-4"
          />
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl mb-2">
            redshoga.com
          </h1>
        </a>
      </Link>

      <p className="text-sub">redshogaのいろいろ置き場</p>
    </header>
  );
};

const NavLinks: React.FC<{ currentPath: string }> = ({ currentPath }) => {
  return (
    <nav className="flex justify-center mb-14">
      <ul className="flex text-lg gap-4">
        {navLinks.map((link, idx) => (
          <li
            className={`border-main hover:opacity-70 ${
              link.active(currentPath) ? "border-b-2" : ""
            }`}
            key={idx}
          >
            <Link href={link.href} passHref>
              <a>
                <h2>{link.title}</h2>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Main: React.FC<{ children: React.ReactNode; currentPath: string }> = (
  props
) => {
  const useMarkdown = !!navLinks.find((link) => link.active(props.currentPath))
    ?.useMarkdown;

  return (
    <main
      className={`max-w-2xl mx-auto mb-14 px-6 ${
        useMarkdown ? `prose prose-h1:text-2xl` : ""
      }`}
    >
      {props.children}
    </main>
  );
};

export const MetaTag: React.FC<{
  currentPath: string;
}> = (props) => {
  const title = navLinks.find((link) => link.active(props.currentPath))?.title;

  return (
    <Head>
      <title>redshoga.com{title && ` | ${title}`}</title>
      <link rel="icon" type="shortcut icon" href="/icon.png" />
    </Head>
  );
};

export const Container: React.FC<Props> = (props) => {
  const router = useRouter();
  const currentPath = router.asPath || "";

  return (
    <>
      <MetaTag currentPath={currentPath} />
      <Header />
      <NavLinks currentPath={currentPath} />
      <Main currentPath={currentPath}>{props.children}</Main>
    </>
  );
};
