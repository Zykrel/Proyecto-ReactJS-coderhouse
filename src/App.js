import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Primer entregable-Nahuel Garcia :D" />
    </div>

  );
}

export default App;
