"use client";
export default function MenuList() {
  return (
    <div className="hidden md:flex h-full items-center">
      <a
        href="#"
        className="px-4 py-3 rounded-lg hover:bg-indigo-400 hover:text-white"
      >
        Reputation
      </a>
      <a
        href="#"
        className="px-4 py-3 rounded-lg hover:bg-indigo-400 hover:text-white"
      >
        New users
      </a>
      <a
        href="#"
        className="px-4 py-3 rounded-lg hover:bg-indigo-400 hover:text-white"
      >
        Voters
      </a>
      <a
        href="#"
        className="px-4 py-3 rounded-lg hover:bg-indigo-400 hover:text-white"
      >
        Editors
      </a>
      <a
        href="#"
        className="px-4 py-3 rounded-lg hover:bg-indigo-400 hover:text-white"
      >
        Moderators
      </a>
    </div>
  );
}
