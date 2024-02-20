import { ReactNode } from "react";

type sectionOptionsIcons={
  [key:string]:object;
}

interface NavbarAsideSection {
  sectionName: string
}

export function NavbarAsideSection({
  sectionName
}: NavbarAsideSection) {
  
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
    <ul className="py-2 flex flex-col">
      <span className="font-bold text-xl pl-2">{sectionName}</span>
      {sideMenuOptions.map(
        (option, index): ReactNode => (
          <li className="flex justify-start group" key={index}><label>{sideMenuIcons[index]}<a href="#" className="hover:bg-youtube-dark text-[0.95rem] block w-full p-2">{option}</a></label></li>
        )
      )}
    </ul>
  );
}
