import React from "react";
import Link from "next/link";

export const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">404</h1>
      <p className="text-slate-500 mb-12">ページが見つかりませんでした。</p>
      <Link href="/" className="text-slate-500 text-sm hover:underline">
        トップページへ
      </Link>
    </div>
  );
};
