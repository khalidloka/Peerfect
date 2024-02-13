import React from "react";
import Image from "next/image";
import Woman from "../../public/woman1.png";

function section5() {
  return (
    <>
      <div className="bg-white">
        <div>
          <Image src={Woman} alt="Photo de la fondatrice" />
        </div>
        <div></div>
      </div>
    </>
  );
}

export default section5;
