import type { Metadata } from "next";
import { redirect } from "next/navigation";

export default async function Page() {
  redirect("/");
}
