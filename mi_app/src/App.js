import './App.css';
import BarraDeNav from './components/BarraDeNav'
import VistaProducto from './components/Vistaproducto';
import './hoja-de-estilo/ProductDetail.css'

function App() {
  return (
    <div className="App">
    <BarraDeNav className="nav" />

    <VistaProducto />
  
    </div>
  );
}

export default App;
