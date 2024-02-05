import Image from "next/image";
import React from "react";
import blackellips from "@/public/EllipseBlack.svg"
import JeVeuxButton from "@/components/Home/JeVeuxButton";
import mainPic from "../../public/mainPic.svg";
import blueellips from "@/public/EllipseBlue.svg"

export default function () {
  return (
    <>
      
        <div className=" h-screen mb-20">
          <Image className=" z-40 "
            src={mainPic}
            alt="background"
       
            style={{
              width: '100%',
              height: 'auto',
            }}
            objectFit="cover"
          />
          <div className="absolute z-50 inset-0 flex items-center justify-center">
            <JeVeuxButton />
          </div>
          
        
          <div className="absolute right-1/3 -bottom-24 font-extrabold -z-10 w-[111px] h-[111px] rounded-full shadow border-8 border-black" />

        <div className=" relative -left-12 -z-10 bottom-[180px] w-[111px] h-[111px] rounded-full shadow border-8 border-blue-800" />
        </div>
        
     
     
    </>
  );
}
