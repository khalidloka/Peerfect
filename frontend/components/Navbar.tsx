// Navbar component
import React from "react";
import { AlignJustify } from "lucide-react";
import Logo from "../public/Logo.svg";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex justify-between py-2 bg-opacity-70 fixed w-full z-50">
      <div className="py-4 px-8">
        <AlignJustify className="text-[#004AAD] size-10 font-bold"  />
      </div>
      <div className="px-3">
        <Link href={"/"}>
        <Image
          className=" mr-10 "
          src={Logo}
          alt=""
         
          priority
        />
        </Link>
      </div>
    </div>
  );
}
