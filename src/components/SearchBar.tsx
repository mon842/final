"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


interface Props {
  routeType: string;
}

function Searchbar({ routeType }: Props) {
  console.log(routeType);
  
  const router = useRouter();
  const [search, setSearch] = useState("");

  // query after 0.3s of no input
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search) {
        router.push(`/${routeType}?q=` + search);
      } else {
        router.push(`/${routeType}`);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search, routeType]);

  return (
    <div className='mt-3'>
      <img src="" alt="" />
      <input
        id='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='search users'
        className='rounded-lg bg-slate-50 p-2'
      />
    </div>
  );
}

export default Searchbar;