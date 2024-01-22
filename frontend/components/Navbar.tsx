import React from "react";
import { AlignJustify } from "lucide-react";
import Logo from "../public/Logo";
import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <div className="flex justify-between  py-2">
        <div className="py-4  px-8">
          <AlignJustify />
        </div>
        <div><Link href={'/'}>
          <Logo /></Link>
        </div>
      </div>
    </>
  );
}
