import React from "react";
import Image from "next/image";
import Team1 from "../../public/team1.png";
import Team2 from "../../public/team2.png";
import Team3 from "../../public/team3.png";
import Team4 from "../../public/team4.png";
import Team5 from "../../public/team5.png";
import Team6 from "../../public/team6.png";
import BackPhoto1 from "../../public/Backphoto1.png";

function Team() {
  return (
    <div className="flex flex-row items-start justify-between gap-12">
      <div className="relative h-96 w-1/6 justify-center items-center">
  {/* Background Image */}
  <div>
    <Image
      src={BackPhoto1}
      alt="Background Photo"
      className=" h-full w-full object-cover"
    />
  </div>
  {/* Image with src={Team1} */}
  <div className="absolute inset-0 flex items-end justify-end">
    <Image
      src={Team1}
      alt="Photo de la fondatrice"
      className="content-center"
      style={{ width: "100%", height: "100%" }}
    />
  </div>
</div>

      <div className="bg-neyon flex h-96 w-1/6 justify-center items-center shadow-md rounded-full mt-16">
        <Image
          src={Team2}
          alt="Photo de la fondatrice"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="bg-neyon flex h-96 w-1/6 justify-center items-center shadow-md rounded-full">
        <Image
          src={Team3}
          alt="Photo de la fondatrice"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="bg-neyon flex h-96 w-1/6 justify-center items-center shadow-md rounded-full mt-16">
        <Image
          src={Team4}
          alt="Photo de la fondatrice"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="bg-neyon flex h-96 w-1/6 justify-center items-center shadow-md rounded-full">
        <Image
          src={Team5}
          alt="Photo de la fondatrice"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="bg-neyon flex h-96 w-1/6 justify-center items-center shadow-md rounded-full mt-16">
        <Image
          src={Team6}
          alt="Photo de la fondatrice"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}

export default Team;
