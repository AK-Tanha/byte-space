import { SearchIcon } from "./icons";

const U = (px: number) => `${px / 14.4}cqw`;

export function SearchBar({
  variant = "flow",
}: {
  variant?: "flow" | "stage";
}) {
  if (variant === "stage") {
    return (
      <form
        action="/courses"
        className="flex items-center"
        style={{ gap: U(15), height: U(52) }}
      >
        <label
          className="relative flex h-full items-center"
          style={{ width: U(460) }}
        >
          <span className="sr-only">Search courses</span>
          <SearchIcon
            className="absolute left-0 text-neutral-400"
            style={{ left: U(22), width: U(20), height: U(20) }}
          />
          <input
            type="search"
            name="q"
            placeholder="Course, topic, creator"
            className="h-full w-full rounded-full bg-white pl-0 text-neutral-800 outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-lime"
            style={{ paddingLeft: U(56), paddingRight: U(20), fontSize: U(19) }}
          />
        </label>
        <button
          type="submit"
          className="shrink-0 rounded-full bg-lime font-medium text-neutral-900 transition-colors hover:bg-lime/85"
          style={{ width: U(105), height: U(52), fontSize: U(17) }}
        >
          Search
        </button>
      </form>
    );
  }

  return (
    <form action="/courses" className="flex w-full items-center gap-3 sm:gap-4">
      <label className="relative flex h-14 w-full items-center">
        <span className="sr-only">Search courses</span>
        <SearchIcon className="absolute left-5 h-5 w-5 text-neutral-400" />
        <input
          type="search"
          name="q"
          placeholder="Course, topic, creator"
          className="h-full w-full rounded-full bg-white pl-12 text-neutral-800 outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-lime"
        />
      </label>
      <button
        type="submit"
        className="h-14 shrink-0 rounded-full bg-lime px-7 font-medium text-neutral-900 transition-colors hover:bg-lime/85"
      >
        Search
      </button>
    </form>
  );
}
