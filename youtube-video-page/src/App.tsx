import { useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  const [state, setState] = useState(false)
  return (
    <header className="w-screen h-screen flex-col flex">
      <Navbar.Root state={state} setState={setState}>
        <></>
      </Navbar.Root>
      <Navbar.Aside state={state}/>
    </header>
  );
}

export default App;
