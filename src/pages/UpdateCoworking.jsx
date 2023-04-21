import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../layout/Header";

const UpdateCoworking = () => {
  // je créé un state pour stocker un coworking
  const [coworking, setCoworking] = useState(null);

  // je récupère l'id présent dans l'url
  const { id } = useParams();

  // j'utilise useEffect, pour executer l'appel à l'api
  // une seule fois, au chargement du composant
  useEffect(() => {
    // je fais un appel fetch, vers l'url de l'api pour récupérer
    //  un coworking en fonction de l'id présent dans l'url
    fetch(`http://localhost:3002/api/coworkings/${id}`)
      .then((responseJson) => responseJson.json())
      .then((responseJs) => {
        // si j'ai une réponse de l'api, je stocke le coworking
        // renvoyé dans le state
        setCoworking(responseJs.data);
      });
  }, [id]);

  // je créé un event listener quand le formulaire est validé
  const handleSubmit = (event) => {
    // j'utilise l'objet event, fourni automatiquement par le navigateur
    // pour empêcher que la page soit rechargée (comportement par défaut)
    event.preventDefault();

    // je récupère les valeurs des champs du formulaire
    // et on les stocke dans des variables
    const name = event.target.name.value;
    const superficy = event.target.superficy.value;
    const capacity = event.target.capacity.value;
    const priceDay = event.target.priceDay.value;

    // on fait un appel vers l'API (express)
    // on lui spécifie la méthode POST (pour créer)
    // et on lui passe en "body" les données du formulaire
    // attention, il faut que les données soient au format JSON
    // donc on utilise JSON.stringify
    // il faut que les donnnées envoyées correspondent
    // à ce qui est attendu par l'API
    fetch(`http://localhost:3002/api/coworkings/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        superficy: superficy,
        capacity: capacity,
        price: {
          day: priceDay,
          hour: null,
          month: null,
        },
      }),

      // si l'api renvie une reponse 200
      // ça veut dire que tout s'est bien passé
      // alors on affiche un message dans la console
    }).then((response) => {
      if (response.status === 200) {
        console.log("coworking modifié");
        // sinon on affiche un message d'erreur
        // car cela veut dire que le coworking n'a pas été créé
      } else {
        console.log("erreur");
      }
    });
  };

  return (
    <>
      <Header />
      {coworking ? (
        <>
          <h1>Mise à jour du coworking : {coworking.name}</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Nom du coworking</label>
              <input type="text" name="name" defaultValue={coworking.name} />
            </div>
            <div>
              <label htmlFor="superficy">Superficie</label>
              <input type="number" name="superficy" defaultValue={coworking.superficy} />
            </div>
            <div>
              <label htmlFor="capacity">Capacité</label>
              <input type="number" name="capacity" defaultValue={coworking.capacity} />
            </div>

            <div>
              <label htmlFor="priceDay">Prix au jour</label>
              <input type="number" name="priceDay" defaultValue={coworking.price.day} />
            </div>

            <button type="submit">Mettre à jour le coworking</button>
          </form>
        </>
      ) : (
        <p>Chargement...</p>
      )}
    </>
  );
};

export default UpdateCoworking;
