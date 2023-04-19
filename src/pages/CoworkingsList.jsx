import React, { useEffect, useState } from "react";
import Header from "../layout/Header";

const CoworkingsList = () => {
  // créé un state coworkingsData pour pouvoir stocker les données récupérées
  // depuis l'API, à savoir la liste des coworkings
  // par défaut (donc au premier chargement du composant), le state
  // contient un tableau vide
  const [coworkingsData, setCoworkingsData] = useState([]);

  // je fais l'appel fetch vers l'url de mon api (qui est en local)
  // et qui renvoie un json contenant la liste des coworkings en BDD
  // quand l'appel est terminé, je stocke les données récupérées
  // dans le state, ce qui force mon composant à se recharger
  useEffect(() => {
    fetch("http://localhost:3002/api/coworkings")
      .then((coworkingsDataJson) => coworkingsDataJson.json())
      .then((coworkingsDataJs) => {
        setCoworkingsData(coworkingsDataJs.data);
      });
  }, []);

  return (
    <>
      <Header />
      <h1>coworkings</h1>

      {/* 
        je boucle sur le state coworkingsData, qui contient la liste des coworkings 
      */}
      {coworkingsData.map((coworking) => {
        return (
          <div key={coworking.id}>
            <h2>{coworking.name}</h2>
            <p>Address : </p>
            <ul>
              <li>{coworking.address.city}</li>
              <li>{coworking.address.number}</li>
              <li>{coworking.address.street}</li>
              <li>{coworking.address.postCode}</li>
            </ul>
            <p>Superficie : {coworking.superficy}</p>
          </div>
        );
      })}
    </>
  );
};

export default CoworkingsList;
