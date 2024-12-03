import { Dispatch, SetStateAction } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function FilterProducts({
  setTitle,
}: {
  setTitle: Dispatch<SetStateAction<string>>;
}) {
  const handleSearch = useDebouncedCallback((value: string) => {
    setTitle(value);
  }, 1000);

  return (
    <div className="flex justify-center px-5">
      <input
        type="text"
        className="input sm:!w-1/2"
        placeholder="Search..."
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
}
