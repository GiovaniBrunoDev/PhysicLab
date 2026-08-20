import LandingCreatina from "./pages/LandingCreatina";
import CompraEmBreve from "./pages/CompraEmBreve";

function App() {
  const searchParams = new URLSearchParams(window.location.search);

  if (searchParams.get("compra") === "em-breve") {
    return <CompraEmBreve kit={searchParams.get("kit")} />;
  }

  return <LandingCreatina />;
}

export default App;
