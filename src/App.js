import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarPrincipal from './components/navbar/navbar';

const App = () => {
  return (
    <div className='container-fluid'>
      <NavbarPrincipal/>
    </div> 
  );
}

export default App;
