import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";

interface dropdownMenuProps {
  items: { name: string; href: string; as: string }[];
}

function DropdownMenu({ items }: dropdownMenuProps) {
  return (
    <>
      <Menu
        as="div"
        className="relative flex items-center justify-center text-left"
      >
        <div>
          <Menu.Button className="text-[#d5a675] hover:text-[#d5a675] text-md font-semibold transition duration-300 ease-linear flex items-center justify-center gap-1">
            <FontAwesomeIcon icon={faAngleDown} width={12} height={12} />
            <p>Áreas de Atuação</p>
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
          <Menu.Items className="absolute top-5 mt-2 w-56 origin-top divide-y divide-gray-100 rounded-md bg-[#B6BBB9] shadow-lg focus:outline-none z-[100]">
            {items.map((item) => (
              <div className="px-1 py-1 " key={item.name}>
                <Menu.Item>
                  {({ active }) => (
                    <Link href={item.href} as={item.as}>
                      <button
                        className={`${
                          active ? "bg-[#424530] text-white" : "text-[#282828]"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm text-[#d5a675] hover:text-[#d5a675] text-md font-semibold transition duration-200 ease-linear `}
                      >
                        {item.name}
                      </button>
                    </Link>
                  )}
                </Menu.Item>
              </div>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}

export default DropdownMenu;
