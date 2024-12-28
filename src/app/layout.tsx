import { serviceConfig } from "@/constants/serviceConfig";
import "@/styles/globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata = {
  title: serviceConfig.title,
  description: serviceConfig.metaDescription,
  icons: {
    icon: "/profile/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || ""} />
      <body className="bg-slate-100 container py-12">{children}</body>
    </html>
  );
}
