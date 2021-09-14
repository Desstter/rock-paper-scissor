import "bootstrap/dist/css/bootstrap.min.css";
import { Header, Score, FightTable, Footer, SelectionZone } from './Components';

function App() {
  return (
    <div className="App text-center">
      <Header />
      <Score />
      <FightTable />
      <SelectionZone />
      <Footer />
    </div>
  );
}

export default App;
