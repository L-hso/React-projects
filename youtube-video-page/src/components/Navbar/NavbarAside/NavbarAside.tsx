
import { ReactNode } from "react";
import { NavbarAsideSection } from "./NavbarAsideSections";

export function NavbarAside({state}:{state: boolean}): ReactNode {
  const asideOptions = {
    Você: [
      "Seu canal",
      "Histórico",
      "Seus vídeos",
      "Assistir mais tarde",
      'Videos marcados com "Gostei"',
    ],
    Inscrições: ["Canal 1", "Canal 2", "Canal 3"],
    Explorar: [
      "Em alta",
      "Shopping",
      "Música",
      "Filmes",
      "Ao vivo",
      "Jogos",
      "Notícias",
      "Esportes",
      "Aprender",
      "Podcasts",
    ],
    "Mais do Youtube": [
      "Youtube Premium",
      "Youtube Studio",
      "Youtube Music",
      "Youtube Kids",
    ],
  };

  return (
    <>
      
      <aside data-ativo={state}className="bg-zinc-700 overflow-y-auto transition-transform duration-300 -translate-x-full flex flex-col justify-start items-around 
      max-w-72 p-4 data-[ativo=true]:translate-x-0">
        <ul>
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#">Shorts</a>
          </li>
          <li>
            <a href="#">Inscrições</a>
          </li>
        </ul>
        <hr />

        <NavbarAsideSection
          sectionName="Você"
          sectionOptions={asideOptions.Você}
        />

        <hr />
        <NavbarAsideSection
          sectionName="Inscrições"
          sectionOptions={asideOptions.Inscrições}
        />
        <hr />
        <NavbarAsideSection
          sectionName="Explorar"
          sectionOptions={asideOptions.Explorar}
        />
        <hr />
        <NavbarAsideSection
          sectionName="Mais do Youtube"
          sectionOptions={asideOptions["Mais do Youtube"]}
        />

      </aside>
    </>
  );
}
