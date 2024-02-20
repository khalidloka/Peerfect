import React from "react";
import BackProf from "./section1";

const Form = () => {
  return (
    <div>
      <div className="mb-36">
        <BackProf></BackProf>
      </div>
      <div className="bg-Apropo p-16 m-12 rounded-xl">
        <form className="space-y-4">
          
          <div className="flex flex-row space-x-32 ">
            <label className="block">Vous êtes ?</label>
            <select className="w-96 p-2 rounded">
              <option>Étudiant</option>
              <option>Formateur</option>
            </select>
          </div>
          <div className="flex flex-row space-x-32">
            <label className="block">Nom</label>
            <input
              className="w-96 p-2 rounded"
              type="text"
              placeholder="Nom"
            />
          </div>
          <div className="flex flex-row space-x-32">
            <label className="block">Prénom</label>
            <input
              className="w-96 p-2 rounded"
              type="text"
              placeholder="Prénom"
            />
          </div>
          <div className="flex flex-row space-x-32">
            <label className="block">Pays</label>
            <input
              className="w-96 p-2 rounded"
              type="text"
              placeholder="Pays"
            />
          </div>
          <div className="flex flex-row space-x-32">
            <label className="block">Ville</label>
            <input
              className="w-96 p-2 rounded"
              type="text"
              placeholder="Ville"
            />
          </div>
          <div className="flex flex-row space-x-32">
            <label className="block">Numéro de téléphone</label>
            <input
              className="w-96 p-2 rounded"
              type="text"
              placeholder="Numéro de téléphone"
            />
          </div>
          <div className="flex flex-row space-x-32">
            <label className="block">Email</label>
            {" "}
            <input
              className="w-96 p-2 rounded"
              type="text"
              placeholder="Email"
            />
          </div>

          <div className="flex flex-row space-x-32">
            <label className="block">Vous préférez faire ?</label>
            <select className="w-96 p-2 rounded">
              <option>En ligne</option>
              <option>Présentiel</option>
            </select>
          </div>
          <div className="flex flex-row space-x-32">
            <label className="block">Années d’expérience</label>
            <select className="w-96 p-2 rounded">
              <option>Plus de 5 ans</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="flex flex-row space-x-32">
            <label className="block">Ajouter votre CV</label>
            <input type="file" className="w-96"/>
          </div>
          <button className="w-96 p-2 rounded bg-blue-500 text-white">
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
