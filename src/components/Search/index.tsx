import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export type Props = {
  searchText: string;
  setSearchText: (v: string) => void;
};

export const Search: React.FC<Props> = (props) => {
  return (
    <div className="w-full relative">
      <div className="absolute left-3 top-1/2 -translate-y-1/2">
        <MagnifyingGlassIcon width={20} />
      </div>
      <input
        type="search"
        className="
          border borde-gray-500 rounded-full pl-10 pr-4 py-1 w-full focus-visible:border-gray-400 focus-visible:outline-none text-black
        dark:bg-gray-500 dark:text-white dark:border-gray-700
        "
        onChange={(e) => props.setSearchText(e.target.value)}
        value={props.searchText}
        aria-label="検索"
      />
    </div>
  );
};
