import { Dispatch, ReactNode } from "react";
import { Menu } from "lucide-react";
interface NavbarRoot{
  children: ReactNode;
  setState: Dispatch<boolean>;
  state: boolean;
}

export function NavbarRoot({
  children,
  state,
  setState,
}: NavbarRoot) {
  return (
    <nav className="w-full p-2 bg-zinc-900 top-0">
      <button onClick={(): void => setState(state == false)}>
        <Menu color={"#efefef"} size={32} strokeWidth={1.5} />
      </button>
      {children}
    </nav>
  );
}
