import Navbar from "./componentes/Navbar";
import "./App.css";
import Hero from "./componentes/Hero";
import Card from "./componentes/Card";
import data from './data';
function App() {

  const cards = data.map((item) => {
    return (
      <Card key={item.id}
        {...item}
      />
    )
  })

  console.log(cards)
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="card--list">
        {cards}
      </div>
    </div>
  );
}

export default App;
