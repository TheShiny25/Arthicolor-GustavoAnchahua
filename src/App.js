import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarPrincipal from './components/navbar/navbar';
import ItemListContainer from './components/container/itemListContainer';
import ItemDetailContainer from './components/container/itemDetailContainer';
import Main from './components/main/main';
import {StoreProvider} from './context/cartContext.jsx';

const App = () => {
  return (
    <StoreProvider>
      <div className='container-fluid'>
        <BrowserRouter>
            <NavbarPrincipal/>
            <Main/>
        </BrowserRouter>
      </div> 
    </StoreProvider>
  );
}

export default App;
