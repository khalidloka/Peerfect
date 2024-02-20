import React from "react";
import BackProf from "./section1";

const Form = () => {
  return (
    <div>
      <div>
  <BackProf></BackProf>
      </div>
      <div className="bg-gradient-to-b from-purple-400 to-white p-10">
        <form className="space-y-4">
          <div>
            <label className="block">Vous êtes ?</label>
            <select className="w-full p-2 rounded">
              <option>Étudiant</option>
              <option>Formateur</option>
            </select>
          </div>
          <input className="w-full p-2 rounded" type="text" placeholder="Nom" />
          <input
            className="w-full p-2 rounded"
            type="text"
            placeholder="Prénom"
          />
          <input
            className="w-full p-2 rounded"
            type="text"
            placeholder="Pays"
          />
          <input
            className="w-full p-2 rounded"
            type="text"
            placeholder="Ville"
          />
          <input
            className="w-full p-2 rounded"
            type="text"
            placeholder="Numéro de téléphone"
          />
          <input
            className="w-full p-2 rounded"
            type="text"
            placeholder="Email"
          />
          <div>
            <label className="block">Vous préférez faire ?</label>
            <select className="w-full p-2 rounded">
              <option>En ligne</option>
              <option>Présentiel</option>
            </select>
          </div>
          <div>
            <label className="block">Années d’expérience</label>
            <select className="w-full p-2 rounded">
              <option>Plus de 5 ans</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div>
            <label className="block">Ajouter votre CV</label>
            <input type="file" />
          </div>
          <button className="w-full p-2 rounded bg-blue-500 text-white">
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
