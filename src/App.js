import Navbar from "./Components/Navbar";
import Companies from "./Sections/Companies/Companies";
import Hero from "./Sections/Hero/Hero";

function App() {
  return (
    <div>
      <div className="px-24">
        <Navbar />
        <Hero />
      </div>
      <Companies />
    </div>
  );
}

export default App;
