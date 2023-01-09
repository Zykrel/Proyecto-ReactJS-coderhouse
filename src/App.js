import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import { ContadorPractica } from './components/Contador/ContadorPractica';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { NavBar } from './components/NavBar/NavBar';
import SobreNosotros from './SobreNosotros/SobreNosotros';



function App() {
  return (
    <BrowserRouter>
    <NavBar />
    {/* {<ContadorPractica/>} */}
    <Routes>

    <Route path='/' element={ <ItemListContainer /> } />

    <Route path="/productos/:categoryId" element={ <ItemListContainer/> }/>

    <Route path='/detalles/:itemId' element={<ItemDetailContainer/>}/>  

    <Route path='/sobre-nosotros' element={<SobreNosotros />} />

    </Routes>
    </BrowserRouter>
    

  );
}

export default App;
