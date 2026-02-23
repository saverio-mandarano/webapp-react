//imort tutti i componenti di gestione delle rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import layout
import DefaultLayout from "./components/layouts/DefaultLayout";

//import pages
import HomePage from "./components/pages/HomePage";
import MoviePage from "./components/pages/MoviePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
