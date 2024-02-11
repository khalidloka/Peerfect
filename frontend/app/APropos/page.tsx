import React from "react";
import Image from "next/image";
import Image1 from "../../public/photo 1.png";
import Image2 from "../../public/photo2.png";
import Image3 from "../../public/photo3.png";

export default function page() {
  return (
    <div className="bg-Apropo pt-12">
      
      {/* first section */}

      <div className="flex gap-x-8  ">
        <div className="flex flex-col justify-center basis-1/2 p-16">
          <h1 className="text-4xl text-blue-800 font-bold	">
            Qui sommes-nous?{" "}
          </h1>
          <p className="pt-4 text-lg">
            <b>2Peerfect</b> est une start-up Edtech, leader avec ces formations
            100% en ligne et sa pédagogie innovante en matière d'enseignement et
            d'apprentissage des langues et logiciels qui vont vous faciliter
            l'intégration au marché professionnel et développer vos compétences
            via des pédagogies d'apprentissage futuriste et des des programmes
            de formations conçu avec excellence.
          </p>
        </div>
        <div className="flex space-x-4 ml-12 basis-1/2">
          <Image
            src={Image1}
            alt="Photo de la fondatrice"
            className="pt-12"
          ></Image>
          <Image
            src={Image2}
            alt="Photo de la fondatrice"
            className="pb-12"
          ></Image>
          <Image
            src={Image3}
            alt="Photo de la fondatrice"
            className="pt-12"
          ></Image>
        </div>
      </div>
      {/* second section */}
      <div>

      </div>
    </div>
  );
}
