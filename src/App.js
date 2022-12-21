import 'bootstrap/dist/css/bootstrap.min.css';
import { ContadorPractica } from './components/Contador/ContadorPractica';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';


function App() {
  return (
    <div>
      <NavBar />
      <ContadorPractica/>
      <ItemListContainer greeting="Primer entregable-Nahuel Garcia :D" />
    </div>

  );
}

export default App;
