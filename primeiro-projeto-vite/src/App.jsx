import './App.css';
import {useState} from 'react';
import {Navbar} from './components/navbar';
import {Aside} from './components/aside';
import {Main} from './components/main';

export const NAV = [['Home', 'News'], ['Products', 'Clothes', 'Sneakers', 'Sports'], ['About Us']];

function App() {
  
  const [state, setState] = useState(false);

  return(
    <>
    <Navbar state={state} setState={setState} />
    <Aside state={state} setState={setState} />
    <Main />
    <footer>
      <span>©Copyright Todos os direitos reservados</span>
    </footer>
    </>
  );
}

export default App;
