"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
    console.log(params.capacity);
  }

  const activeFilter = searchParams.get("capacity") ?? "all";

  return (
    <div className="flex border border-primary-800">
      <Button
        filter={"all"}
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        All Cabins
      </Button>
      <Button
        filter={"small"}
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        1&mdash;3 guests
      </Button>
      <Button
        filter={"medium"}
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        4&mdash;7 guests
      </Button>
      <Button
        filter={"large"}
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        8&mdash;12 guests
      </Button>
    </div>
  );
}

export function Button({ children, filter, activeFilter, handleFilter }) {
  return (
    <button
      onClick={() => handleFilter(filter)}
      className={`${activeFilter === filter ? "bg-primary-700 text-primary-50" : ""} px-5 py-2 hover:bg-primary-700`}
    >
      {children}
    </button>
  );
}

export default Filter;
