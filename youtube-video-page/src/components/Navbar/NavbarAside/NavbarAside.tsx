import { NavbarAsideSection } from "./NavbarAsideSections";
import { Clapperboard, Clock, Flame, Gamepad2, History, Home, Lightbulb, LucideIcon, Music2, Newspaper, Play, PlaySquare, Podcast, Radio, ShoppingBag, SquareUser, ThumbsUp, Trophy, Users, Youtube } from "lucide-react";

export function NavbarAside({visible}:{visible: boolean}){



  // Opções dentro do menu lateral
  const sideMenuOptions = {
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
      "Youtube Music2",
      "Youtube Kids",
    ]
  };


  // Icones do menu lateral

  const sideMenuIcons = {
    "Você": {
      "Seu canal": SquareUser,
      "Histórico": History,
      "Seus vídeos": PlaySquare,
      "Assistir mais tarde": Clock,
      'Videos marcados com "Gostei"': ThumbsUp
    },
    "Inscrições": {"Canal 1": null, "Canal 2": null , "Canal 3": null},
    "Explorar": {
      "Em alta": Flame,
      "Shopping": ShoppingBag,
      "Música": Music2,
      "Filmes": Clapperboard,
      "Ao vivo": Radio,
      "Jogos": Gamepad2,
      "Notícias": Newspaper,
      "Esportes": Trophy,
      "Aprender": Lightbulb,
      "Podcasts": Podcast,
    },
    "Mais do Youtube": {
      "Youtube Premium": Youtube,
      "Youtube Studio":Youtube,
      "Youtube Music2":Youtube,
      "Youtube Kids":Youtube
    }

  }



  return (
    <>
      
      <aside data-ativo={visible}className="bg-youtube-darkest overflow-y-auto no-scrollbar transition-transform duration-300 -translate-x-full flex flex-col justify-start items-around 
      max-w-60 p-4 data-[ativo=true]:translate-x-0 *:text-white *:*:">
        
        <ul className="">
          <li>
            <label><Home /><a href="#">Início</a></label>
          </li>
          <li>
            <label><Play /><a href="#">Shorts</a></label>
          </li>
          <li>
            <label><Users /><a href="#">Inscrições</a></label>
          </li>
        </ul>
        <hr />

        <NavbarAsideSection
          sectionName="Você"
          sectionOptions={sideMenuOptions[Você]}
          sectionOptionsIcons={sideMenuIcons}
        />

        <hr />
        <NavbarAsideSection
          sectionName="Inscrições"
          sectionOptions={sideMenuOptions.Inscrições}
        />
        <hr />
        <NavbarAsideSection
          sectionName="Explorar"
          sectionOptions={sideMenuOptions.Explorar}
        />
        <hr />
        <NavbarAsideSection
          sectionName="Mais do Youtube"
          sectionOptions={sideMenuOptions["Mais do Youtube"]}
        />

      </aside>
    </>
  );
}
