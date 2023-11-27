import Image from "next/image";
import cable from "@/public/cable.svg";
import React from "react";
import Link from "next/link";
import { Home, User } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/", current: true, icon: <Home />, child: [] },
  {
    name: "Users",
    href: "/user",
    current: false,
    icon: <User />,
    child: ["All User", "Add Fee"],
  },
  // { name: "Resources", href: "#", current: false, icon: Home },
  // { name: "Company Directory", href: "#", current: false, icon: Home },
  // { name: "Calendar", href: "#", current: false, icon: Home },
  // { name: "Settings", href: "#", current: false, icon: Home },
];

const SidebarNavigation = () => {
  return (
    <div className="flex flex-col gap-y-5 h-screen border-r-2 p-6">
      <div>
        <Image src={cable} className="" alt="Logo" width={50} height={42} />
      </div>

      <nav>
        <ul className="">
          <Accordion type="single" collapsible className="w-full">
            {navigation.map((item, index) => (
              <AccordionItem key={index} value={item.name}>
                <AccordionTrigger className="flex p-2 my-2 text-gray-600 gap-x-3 rounded-md focus:bg-gray-50 focus:text-black font-semibold hover:no-underline">
                  <span className="">{item.icon}</span>
                  <span className="">{item.name}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="flex flex-col items-center gap-y-2">
                    {item.child.map((child, index) => (
                      <li key={index} className="">
                        <Link
                          href={item.href}
                          className="p-2 my-2 text-gray-600 gap-x-3 rounded-md focus:bg-gray-50 focus:text-black"
                        >
                          <span className="">{child}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          {/* {navigation.map((item, index) => (
            <li key={index} className="">
              <Link
                href={item.href}
                className="flex p-2 my-2 text-gray-600 gap-x-3 rounded-md focus:bg-gray-50 focus:text-black font-semibold"
              >
                {item.icon}
                <span className="">{item.name}</span>
              </Link>
            </li>
          ))} */}
        </ul>
      </nav>
    </div>
  );
};

export default SidebarNavigation;
