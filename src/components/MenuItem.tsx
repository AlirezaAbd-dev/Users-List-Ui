"use client";
import { Menu } from "@headlessui/react";
import { ReactNode } from "react";

const MenuItems = ({ children }: { children: ReactNode }) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <button
          className={`${
            active ? "bg-indigo-400 text-white" : "text-gray-900"
          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
        >
          {children}
        </button>
      )}
    </Menu.Item>
  );
};

export default MenuItems;
