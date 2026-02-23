//import componente segnaposto da libreria routing
import { Outlet } from "react-router-dom";

//import navbar per averlo nel template che si ripeterà ad ogni sezione
import NavBar from "../components/NavBar";

export default function DefaultLayout() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main className="container">
        <Outlet />
      </main>
    </>
  );
}
