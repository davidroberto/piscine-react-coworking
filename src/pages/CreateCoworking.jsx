import Header from "../layout/Header";

const CreateCoworking = () => {
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
    fetch("http://localhost:3002/api/coworkings", {
      method: "POST",
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
        console.log("coworking créé");
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

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nom du coworking</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="superficy">Superficie</label>
          <input type="number" name="superficy" />
        </div>
        <div>
          <label htmlFor="capacity">Capacité</label>
          <input type="number" name="capacity" />
        </div>

        <div>
          <label htmlFor="priceDay">Prix au jour</label>
          <input type="number" name="priceDay" />
        </div>

        <button type="submit">Créer le coworking</button>
      </form>
    </>
  );
};

export default CreateCoworking;
