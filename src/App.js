import Navbar from "./Components/Navbar";
import Commitments from "./Sections/Commit/Commitments";
import Companies from "./Sections/Companies/Companies";
import Hero from "./Sections/Hero/Hero";

function App() {
  return (
    <div className="font-var">
      <div className="px-24">
        <Navbar />
        <Hero />
      </div>
      <Companies />
      <div className="px-24">
        <Commitments />
      </div>
    </div>
  );
}

export default App;
