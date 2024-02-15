import "../App.css";
import { Menu } from "lucide-react";
import { NAV } from "../App";

function MenuButton({ state, changeState }) {
  return (
    <button onClick={() => changeState(state == false)}>
      <Menu color="#fff" size={25} className="menu" />
    </button>
  );
}

export function List({ navlist }) {
  return (
    <ul className="ul1">
      {navlist.map((e, ind) => (
        <li key={ind}>
          <span>{e[0]}</span>
          {e.length > 1 && (
            <div className="ul2">
              {[...e.slice(1,)].map((i, ind) => (
                <a href="#" key={ind}>{i}</a>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export function Navbar({ state, setState }) {
  return (
    <nav>
      <span className="first-span">SiteComum.com</span>
      <MenuButton state={state} changeState={setState} />
      <List navlist={NAV} />
    </nav>
  );
}
