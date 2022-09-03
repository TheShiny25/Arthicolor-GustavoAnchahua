import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarPrincipal from './components/navbar/navbar';
import ItemListContainer from './components/container/itemListContainer';
import ItemDetailContainer from './components/container/itemDetailContainer';

const App = () => {
  return (
    <div className='container-fluid'>
      <NavbarPrincipal/>
      {/*<ItemListContainer contenido="Arthicolor"/>*/}
      <ItemDetailContainer/>
    </div> 
  );
}

export default App;
