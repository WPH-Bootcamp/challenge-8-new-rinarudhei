import { Route, Routes } from "react-router-dom";
import "./index.css";
import Homepage from "./pages/Homepage";
import FavoritesPage from "./pages/FavoritesPage";
import DetailsPage from "./pages/DetailsPage";
import SearchedPage from "./pages/SearchedPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/details/:id" element={<DetailsPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/search" element={<SearchedPage />} />
    </Routes>
  );
}

export default App;
