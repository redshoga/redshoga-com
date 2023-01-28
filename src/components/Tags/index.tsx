export type Props = {
  tags: {
    label: string;
    value: string;
  }[];
  onClick: (v: string) => void;
};

export const Tags: React.FC<Props> = (props) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {props.tags.map((tag, idx) => (
        <button
          key={idx}
          className="
            border borde-gray-500 px-2 py-1 rounded-full text-xs text-gray-500 hover:bg-gray-100 
            dark:bg-gray-500 dark:text-white dark:border-gray-700
          "
          onClick={() => props.onClick(tag.value)}
        >
          {tag.label}
        </button>
      ))}
    </div>
  );
};
