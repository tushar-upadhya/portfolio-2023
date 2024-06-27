"use client";

import { navLinks } from "@/lib/navlinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathName = usePathname();
  //   console.log("pathName:", pathName);

  return (
    <nav className="flex gap-8">
      {navLinks.map((link, index) => {
        return (
          <Link
            href={link.path}
            className={`${
              link.path === pathName && "text-accent border-b-2 border-accent"
            }capitalize font-medium hover:text-accent transition-all`}
            key={index}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
