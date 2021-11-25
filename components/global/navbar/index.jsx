import React, { useEffect } from "react";
import Link from "next/link";
import { navs } from "./navigation";
import { useRouter, withRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <header className="text-base w-screen fixed z-40 top-0 left-0 shadow-md h-14 bg-white flex justify-center font-lato">
      <div className="max-w-6xl w-full flex justify-between items-center">
        <div>tempat logonya</div>
        <nav className="h-full">
          <ul className="flex gap-10 h-full">
            {navs.map((nav) => (
              <li
                key={nav.text}
                className="flex flex-col justify-between h-full"
              >
                <div />
                <Link href={nav.href} passHref={true}>
                  <a>{nav.text}</a>
                </Link>
                <div
                  className={
                    router.asPath == nav.href
                      ? "h-0.5 bg-qolbiLight w-full"
                      : ""
                  }
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default withRouter(Navbar);
