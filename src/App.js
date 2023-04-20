import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CoworkingsList from "./pages/CoworkingsList";
import CreateCoworking from "./pages/CreateCoworking";

function App() {
  // j'ai installé le react router
  // et j'ai créé deux routes (donc deux pages)
  // une pour la page d'accueil qui affiche le composant Home
  // une pour la page coworkings qui affiche le composant CoworkingsList

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coworkings" element={<CoworkingsList />} />
        <Route path="/create-coworking" element={<CreateCoworking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
