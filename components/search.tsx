'use client';
import { IoSearch } from 'react-icons/io5';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
const search = () => {
  const searchParam = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    console.log(term);
    const params = new URLSearchParams(searchParam);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathName}?${params.toString()}`);
  }, 500);

  return (
    <div className="relative flex flex-1">
      <input
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParam.get('query')?.toString()}
        type="text"
        className="w-full border border-gray-200 py-2 pl-10 text-sm outline-2 rounded-sm"
        placeholder="Search.."
      />
      <IoSearch className="absolute left-4 top-2 h-5 w-5 text-gray-500" />
    </div>
  );
};

export default search;
