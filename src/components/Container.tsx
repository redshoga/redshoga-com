import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { navLinks } from "../contants/navLinks";

export type Props = {
  children: React.ReactNode;
};

const Header = () => {
  return (
    <header className="flex flex-col items-center mb-10 mt-16">
      <h1 className="font-bold text-xl sm:text-2xl md:text-3xl text-main mb-2">
        redshoga.com
      </h1>
      <p className="text-sub">redshoga&rsquo;s portfolio</p>
    </header>
  );
};

const NavLinks = () => {
  const router = useRouter();
  const currentPath = router.asPath || "";

  return (
    <nav className="flex justify-center mb-14">
      <ul className="font-bold text-lg sm:text-xl md:text-2xl text-main flex gap-6">
        {navLinks.map((link, idx) => (
          <li
            className={`border-main hover:opacity-70 p-1 ${
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

const Main: React.FC<{ children: React.ReactNode }> = (props) => {
  return <main className="w-80 mx-auto mb-14 px-2">{props.children}</main>;
};

export const Container: React.FC<Props> = (props) => {
  return (
    <>
      <Header />
      <NavLinks />
      <Main>{props.children}</Main>
    </>
  );
};
