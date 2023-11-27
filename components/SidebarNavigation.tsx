import Image from "next/image";
import cable from "@/public/cable.svg";
import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Users", href: "/user", current: false },
  { name: "Resources", href: "#", current: false },
  { name: "Company Directory", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Settings", href: "#", current: false },
];

const SidebarNavigation = () => {
  return (
    <div className="flex flex-col gap-y-5 h-screen border-r-2 p-6">
      <div>
        <Image src={cable} className="" alt="Logo" width={50} height={42} />
      </div>
      <nav>
        <ul className="">
          {navigation.map((item, index) => (
            <li key={index} className="">
              <Link
                href={item.href}
                className="flex p-2 my-2 text-gray-600 gap-x-3 rounded-md focus:bg-gray-50 focus:text-black font-semibold"
              >
                <Home />
                <span className="">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SidebarNavigation;
