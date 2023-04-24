const Login = () => {
  const handleSubmit = (event) => {
    // j'empêche le rechargement automatique de la page
    event.preventDefault();

    // je récupère les valeurs des champs du formulaire
    // username et password
    const username = event.target.username.value;
    const password = event.target.password.value;

    // je fais une requête vers l'api (express)
    // sur l'url login avec la méthode POST
    fetch("http://localhost:3002/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // j'envoie dans le corps de la requête POST
      // les données du formulaire
      // formattées en JSON
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      // le serveur express me renvoie un JWT
      // si les infos sont valides (username et password
      // correspondent à un utilisateur en BDD)
      .then((responseJson) => {
        return responseJson.json();
      })
      // je stocke le JWT dans le localStorage
      // pour pouvoir l'utiliser dans toutes les requêtes
      // vers mon API qui nécessitent une authenfication
      .then((responseJs) => {
        const jwt = responseJs.token;

        localStorage.setItem("jwt", jwt);
      });
  };

  // je créé un formulaire avec deux champs :
  // username et password
  // pour connecter mon utilisateur
  // j'attache un event listener sur le submit du formulaire
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username
          <input type="text" name="username" />
        </label>
      </div>

      <div>
        <label>
          Password
          <input type="password" name="password" />
        </label>
      </div>

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
