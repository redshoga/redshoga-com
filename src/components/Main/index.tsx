import Link from "next/link";
import React from "react";
import Image from "next/image";
import { serviceLinks } from "../../constants/serviceLinks";
import { colorTheme } from "../../libs/colorTheme";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { serviceConfig } from "../../constants/serviceConfig";

const ColorThemeButton = () => {
  const { theme, toggleTheme } = colorTheme.useTheme();

  return (
    <button
      className="ml-auto px-4 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-500"
      onClick={toggleTheme}
    >
      {theme === "dark" ? <SunIcon width={24} /> : <MoonIcon width={24} />}
    </button>
  );
};

export const Main = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="absolute top-4 right-4">
        <ColorThemeButton />
      </div>

      <main className="flex flex-col gap-4 items-center">
        <Link href="/" passHref>
          <Image
            src="/profile/icon.png"
            alt=""
            width="100"
            height="100"
            className="rounded-full"
          />
        </Link>

        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-2xl font-bold">
              <Link href="/" passHref className="hover:underline">
                {serviceConfig.title}
              </Link>
            </h1>
            <p className="mb-1 text-xs text-gray-600 dark:text-gray-300">
              {serviceConfig.description}
            </p>
          </div>

          <div className="flex gap-3">
            {serviceLinks.map(
              ({ iconHref, siteUrl, alt, size, description }, idx) => (
                <div className="flex flex-col gap-2 items-center">
                  <Link
                    href={siteUrl}
                    passHref
                    key={idx}
                    className="w-12 h-12 rounded-full flex justify-center items-center bg-gray-100 hover:bg-gray-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={iconHref}
                      alt={alt}
                      height={size}
                      width={size}
                    />
                  </Link>
                  <div className="text-xs text-gray-600 dark:text-gray-300">
                    {description}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </main>
    </div>
  );
};
