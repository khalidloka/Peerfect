import React, { useState } from "react";
import Image from "next/image";
import Center from "../../public/center.png";

export default function JeSuisCentre() {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    occupation: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission logic, such as sending the data to a server
    console.log(formData);
  };
  return (
    <>
      <div>
        <div className="">
          <Image
            src={Center}
            alt="Background center"
            style={{ width: "100%" }}
            className=" bg-blend-darken opacity-50"
          />
          <div>
            <h1>Pourquoi devenir un PARTENAIRE avec 2 peerfect?</h1>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="city">City:</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="occupation">Function:</label>
              <input
                type="text"
                id="occupation"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div>
              <label htmlFor="insertMessage">Insert Message:</label>
              <input type="text" id="insertMessage" name="insertMessage" />
            </div>
            <button type="submit">Validate</button>
          </form>
        </div>
      </div>
    </>
  );
}
export const useClient = true;
