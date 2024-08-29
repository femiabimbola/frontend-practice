"use client";

import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "Company" },
    { id: 3, text: "Resources" },
    { id: 4, text: "About" },
    { id: 5, text: "Contact" },
  ];

  return (
    <nav className="flex flex-wrap max-w-[1240px] items-center justify-between py-5 mx-auto ">
      {/*  */}
      <div>
        <Image
          src={"./public/assets/images/logo.svg"}
          width={24}
          height={14}
          className="w-16"
          alt="logo"
        />
      </div>
      <div> menu </div>
      <div> The sign up</div>
    </nav>
  );
};

export default Navbar;
