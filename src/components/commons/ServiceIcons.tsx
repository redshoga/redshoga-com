import { serviceLinks } from "@/constants/serviceLinks";
import Link from "next/link";
import Image from "next/image";

export const ServiceIcons = () => {
  return (
    <div className="flex gap-6 flex-wrap justify-center">
      {serviceLinks.map(
        ({ iconHref, siteUrl, alt, size, description }, idx) => (
          <div className="flex flex-col gap-2 items-center">
            <Link
              href={siteUrl}
              passHref
              key={idx}
              className="w-12 h-12 rounded-full flex justify-center items-center hover:bg-gray-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={iconHref} alt={alt} height={size} width={size} />
            </Link>
            <div className="text-xs text-gray-600">{description}</div>
          </div>
        )
      )}
    </div>
  );
};
