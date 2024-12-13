
import Herosection from "./Herosection";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div>
      <div><h2>Navbar</h2></div>
      <Navbar />
      <div> <h2>Herosection</h2></div>
      <Herosection />
    </div>
  );
}
