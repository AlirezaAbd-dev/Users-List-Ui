"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchBox() {
  return (
    <div className="flex border-2 border-gray-300 rounded-md">
      <MagnifyingGlassIcon className="w-10 text-gray-600 p-2" />
      <input
        type="text"
        placeholder="Search users"
        className="focus:outline-none"
      />
    </div>
  );
}
