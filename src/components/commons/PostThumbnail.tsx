import Link from "next/link";

type Props = {
  title: string;
  date: Date;
  slug: string;
};

export const PostThumbnail = (props: Props) => {
  return (
    <Link
      href={`/posts/${props.slug}`}
      className="flex flex-col gap-2 w-full bg-slate-100 p-4 rounded-lg group hover:bg-slate-200"
    >
      <div className="text-lg font-bold group-hover:underline">
        {props.title}
      </div>
      <div className="text-sm text-gray-500">
        {props.date.toLocaleDateString()}
      </div>
    </Link>
  );
};
