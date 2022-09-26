import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarPrincipal from './components/navbar/navbar';
import ItemListContainer from './components/container/itemListContainer';
import ItemDetailContainer from './components/container/itemDetailContainer';
import Main from './components/main/main';
import {StoreProvider} from './context/cartContext.jsx';

const App = () => {
  return (
    <div className='container-fluid'>

      <StoreProvider>
        <BrowserRouter>
            <NavbarPrincipal/>
            <Main/>
        </BrowserRouter>
      </StoreProvider>
      
    </div> 
  );
}

export default App;
