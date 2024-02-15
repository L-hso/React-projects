import { NAV } from '../App';
import { List } from './navbar';
import '../App.css';

export function Aside({state, setState}){
  return (
    <aside {...window.addEventListener('resize',()=> setState(false))} onMouseLeave={()=>setState(false)} style={state?{display:'flex'}:{display:'none'}}>
      <List navlist={NAV}/>
    </aside>
  );
}
