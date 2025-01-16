import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a JW!" />} />
          <Route path='/category/ropa' element={ <div><h1>Ropa</h1></div> }></Route>
          <Route path='/category/calzado' element={ <div><h1>Calzado</h1></div> }></Route>
          <Route path='/category/accesorios' element={ <div><h1>Accesorios</h1></div> }></Route>
          <Route path='/category/ofertas' element={ <div><h1>Ofertas</h1></div> }></Route>
          <Route path='/item/:id' element={<ItemDetailContainer />}></Route>
        </Routes>
      </BrowserRouter>
        {/* <div>
          <ItemListContainer greeting="Bienvenido a JW!"/>
        </div> */}
    </>
  )
}

export default App;
