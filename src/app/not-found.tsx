import { NotFoundPage } from "@/components/pages/NotFountPage";
import { serviceConfig } from "@/constants/serviceConfig";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `404 Not Found | ${serviceConfig.title}`,
};

export default function Page() {
  return <NotFoundPage />;
}
