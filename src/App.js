import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CoworkingsList from "./pages/CoworkingsList";
import CreateCoworking from "./pages/CreateCoworking";
import CoworkingDetails from "./pages/CoworkingDetails";
import UpdateCoworking from "./pages/UpdateCoworking";

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
        <Route path="/coworkings/:id" element={<CoworkingDetails />} />

        <Route path="/admin/coworkings" element={<CoworkingsList />} />
        <Route path="/admin/create-coworking" element={<CreateCoworking />} />
        <Route path="/admin/coworkings/:id" element={<CoworkingDetails />} />
        <Route path="/admin/coworkings/:id/update" element={<UpdateCoworking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
