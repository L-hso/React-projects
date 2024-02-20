import { NavbarAsideSection } from "./NavbarAsideSections";
import { Clapperboard, Clock, Flame, Gamepad2, History, Home, Lightbulb, LucideIcon, Music2, Newspaper, Play, PlaySquare, Podcast, Radio, ShoppingBag, SquareUser, ThumbsUp, Trophy, Users, Youtube } from "lucide-react";

export function NavbarAside({visible}:{visible: boolean}){


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
