import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import { useNavigate } from "react-router-dom";

const CoworkingsList = () => {
  // créé un state coworkingsData pour pouvoir stocker les données récupérées
  // depuis l'API, à savoir la liste des coworkings
  // par défaut (donc au premier chargement du composant), le state
  // contient un tableau vide
  const [coworkingsData, setCoworkingsData] = useState([]);

  // je récupère la fonction navigate du react router
  const navigate = useNavigate();

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

  const handleDeleteClick = (coworking) => {
    // je fais un appel fetch vers l'url de mon api avec la méthode DELETE
    // et je passe l'id du coworking à supprimer en paramètre de l'url
    fetch("http://localhost:3002/api/coworkings/" + coworking.id, {
      method: "DELETE",
    })
      // quand le fetch est terminé, je recharge la page actuelle grâce
      // à la fonction navigate du react router
      .then(() => {
        navigate(0);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
              {/* <li>{coworking.address.city}</li>
              <li>{coworking.address.number}</li>
              <li>{coworking.address.street}</li>
              <li>{coworking.address.postCode}</li> */}
            </ul>
            <p>Superficie : {coworking.superficy}</p>
            {/* 
               créé un bouton avec un event listener
               passe le coworking actuel en paramètre de la fonction handleDeleteClick
              */}
            <button onClick={() => handleDeleteClick(coworking)}>Supprimer le coworking</button>
          </div>
        );
      })}
    </>
  );
};

export default CoworkingsList;
