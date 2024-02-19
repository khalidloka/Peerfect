import React from "react";

function Form() {
  return (
    <div>
      <div className="bg-Apropo flex justify-center mt-52 rounded-t-full">
        <form action="" className="flex flex-col justify-center gap-14 mt-24">
          <input
            type="text"
            name="text"
            placeholder="Nom du centre"
            className="h-10 w-72 rounded-xl "
          />
          <input type="Text" name="text" placeholder="Ville"  className="h-10 w-72 rounded-xl "/>
          <input type="text" name="text" placeholder="Fonction" className="h-10 w-72 rounded-xl " />
          <input type="text" name="text" placeholder="Pourquoi-nous rejoindre?"  className="h-28 w-72 rounded-lg"/>
          <input
            type="url"
            name="url"
            placeholder="Ajouter l’URL des photos du centre"
            className="h-10 w-72 rounded-xl "
          />
          <button>Je valide</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
