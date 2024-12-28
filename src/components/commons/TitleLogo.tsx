import Link from "next/link";
import Image from "next/image";
import { serviceConfig } from "@/constants/serviceConfig";
import { clsx } from "clsx";

type Props = {
  variant: "full" | "compact";
};

export const TitleLogo = ({ variant }: Props) => {
  return (
    <Link href="/" passHref className="group">
      <div
        className={clsx(
          "inline-flex justify-center items-center gap-2 hover:opacity-70",
          {
            "flex-col": variant === "full",
            "flex-row": variant === "compact",
          }
        )}
      >
        <Image
          src="/profile/icon.png"
          alt=""
          width={variant === "full" ? "80" : "40"}
          height={variant === "full" ? "80" : "40"}
          className="rounded-full"
        />

        <div
          className={clsx("flex flex-col", {
            "gap-0": variant === "compact",
            "gap-2": variant === "full",
          })}
        >
          <div
            className={clsx("font-bold group-hover:underline", {
              "text-2xl": variant === "full",
              "text-sm": variant === "compact",
            })}
          >
            {serviceConfig.title}
          </div>
          <p className="mb-1 text-xs text-gray-600">
            {serviceConfig.description}
          </p>
        </div>
      </div>
    </Link>
  );
};
