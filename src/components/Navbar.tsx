"use client"

export default function Nav() {
  return (
    <ul className="flex border-b">
        <li className="-mb-px mr-1">
          <a className="bg-[#071e34] text-white inline-block border-l border-t border-r rounded-t py-2 px-4 font-semibold" href="/profile">Profile</a>
        </li>

        <li className="mr-1">
          <a className="bg-[#071e34] text-white inline-block py-2 px-4  font-semibold" href="/users">Users</a>
        </li>
        <li className="mr-1">
          <a className="bg-[#071e34] text-white inline-block py-2 px-4  font-semibold" href="/records">Records</a>
        </li>
        <li className="mr-1">
          <a className="bg-[#071e34] text-white inline-block py-2 px-4  font-semibold" href="/create">Create</a>
        </li>
      </ul>
  )
}
