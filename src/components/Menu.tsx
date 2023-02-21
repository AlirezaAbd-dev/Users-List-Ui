"use client";
import { Fragment } from "react";
import { Transition, Menu } from "@headlessui/react";
import { Bars3Icon, PlusIcon } from "@heroicons/react/24/outline";
import MenuItems from "./MenuItem";

const HamburgerMenu = () => {
  return (
    <Menu as="div" className="md:hidden relative">
      <div>
        <Menu.Button>
          {({ open }) =>
            open ? (
              <PlusIcon className="w-[40px] rotate-45" />
            ) : (
              <Bars3Icon className="w-[40px]" />
            )
          }
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none px-2">
          <MenuItems>Reputation</MenuItems>
          <MenuItems>New users</MenuItems>
          <MenuItems>Voters</MenuItems>
          <MenuItems>Editors</MenuItems>
          <MenuItems>Moderators</MenuItems>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default HamburgerMenu;
