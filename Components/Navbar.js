import Link from "next/link";
import React from "react";

const Navbar = ({ admin }) => {
  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="flex items-center gap-5">
        {admin ? (
          <>
            <Link
              href="/admin"
              passHref
              className="text-xl font-bold text-gray-300 hover:text-gray-100"
            >
              Admin
            </Link>
            <Link
              href="/"
              passHref
              className="text-xl font-bold text-gray-300 hover:text-gray-100"
            >
              Home
            </Link>
            <Link
              href="/about"
              passHref
              className="text-xl font-bold text-gray-300 hover:text-gray-100"
            >
              About
            </Link>
            <Link
              href="/contact"
              passHref
              className="text-xl font-bold text-gray-300 hover:text-gray-100"
            >
              Contact
            </Link>
            <Link
              href="/blog"
              passHref
              className="text-xl font-bold text-gray-300 hover:text-gray-100"
            >
              Blog
            </Link>
          </>
        ) : (
          <>
            <Link
              href="/"
              passHref
              className="text-xl font-bold text-gray-300 hover:text-gray-100"
            >
              Home
            </Link>
            <Link
              href="/about"
              passHref
              className="text-xl font-bold text-gray-300 hover:text-gray-100"
            >
              About
            </Link>
            <Link
              href="/contact"
              passHref
              className="text-xl font-bold text-gray-300 hover:text-gray-100"
            >
              Contact
            </Link>
            <Link
              href="/blog"
              passHref
              className="text-xl font-bold text-gray-300 hover:text-gray-100"
            >
              Blog
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
