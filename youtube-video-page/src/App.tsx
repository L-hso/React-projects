import { useState } from "react";
import { Navbar } from "./components/Navbar/NavbarWidget";

function App() {
  const [menuVisibility, setMenuVisibility] = useState(false);

  return (
    <header className="w-screen h-screen flex-col flex">
      <Navbar.Root
        menuVisibility={menuVisibility}
        toggleMenuVisibility={setMenuVisibility}
      >
        <></>
      </Navbar.Root>
      <Navbar.Aside visible={menuVisibility} />
    </header>
  );
}

export default App;
