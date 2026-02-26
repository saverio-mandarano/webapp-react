//import componente segnaposto da libreria routing
import { Outlet } from "react-router-dom";

//import navbar per averlo nel template che si ripeterà ad ogni sezione
import NavBar from "../components/NavBar";

//  import del loader
import Loader from "../components/Loader";

// import hook custom del contesto globale
import { useGlobal } from "../contexts/GlobalContext";

export default function DefaultLayout() {
  // attivo l'utilizzo del/dei valore/i messi a disposizione del contesto globale
  const { isLoading } = useGlobal();

  return (
    <>
      <header>
        <NavBar />
      </header>

      <main className="container">
        <Outlet />
      </main>
      {isLoading && <Loader />}
    </>
  );
}
