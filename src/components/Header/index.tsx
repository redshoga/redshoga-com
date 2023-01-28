import Link from "next/link";
import React from "react";
import Image from "next/image";
import { externalServiceLinks } from "../../constants/externalServiceLinks";
import { colorTheme } from "../../libs/colorTheme";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { serviceConfig } from "../../constants/serviceConfig";

export const Header = () => {
  const { theme, toggleTheme } = colorTheme.useTheme();

  return (
    <header className="flex flex-row gap-4 mb-12 items-center">
      <Link href="/" passHref>
        <Image
          src="/profile/icon.png"
          alt=""
          width="60"
          height="60"
          className="rounded-full"
        />
      </Link>

      <div>
        <h1>
          <Link href="/" passHref className="hover:underline">
            {serviceConfig.title}
          </Link>
        </h1>
        <p className="mb-1 text-xs text-gray-500">
          {serviceConfig.description}
        </p>

        <div className="flex gap-2">
          {externalServiceLinks.map(({ iconHref, siteUrl, alt, size }, idx) => (
            <Link
              href={siteUrl}
              passHref
              key={idx}
              className="w-6 h-6 rounded-full flex justify-center items-center bg-gray-100 hover:bg-gray-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={iconHref} alt={alt} height={size} width={size} />
            </Link>
          ))}
        </div>
      </div>

      <button
        className="ml-auto px-4 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-500"
        onClick={toggleTheme}
      >
        {theme === "dark" ? <SunIcon width={24} /> : <MoonIcon width={24} />}
      </button>
    </header>
  );
};
