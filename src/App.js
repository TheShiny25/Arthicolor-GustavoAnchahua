import {BrowserRouter} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarPrincipal from './components/navbar/navbar';
import ItemListContainer from './components/container/itemListContainer';
import ItemDetailContainer from './components/container/itemDetailContainer';
import Main from './components/main/main';

const App = () => {
  return (
    <div className='container-fluid'>

      <BrowserRouter>
          <NavbarPrincipal/>
          <Main/>
      </BrowserRouter>
      {/*<ItemListContainer contenido="Arthicolor"/>*/}
      {/*<ItemDetailContainer/>*/}
    </div> 
  );
}

export default App;
