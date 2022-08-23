import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarPrincipal from './components/navbar/navbar';
import ItemListContainer from './components/container/itemListContainer';

const App = () => {
  return (
    <div className='container-fluid'>
      <NavbarPrincipal/>
      <ItemListContainer contenido="Arthicolor"/>
    </div> 
  );
}

export default App;
