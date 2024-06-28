"use client";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const MobileNav = () => {
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "services",
      path: "/services",
    },
    {
      name: "work",
      path: "/work",
    },
    {
      name: "resume",
      path: "/resume",
    },
    {
      name: "contact",
      path: "/contact",
    },
  ];
  const pathName = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className=""> Logo</div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
