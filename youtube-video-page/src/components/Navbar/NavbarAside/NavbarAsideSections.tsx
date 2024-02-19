import { ReactNode } from "react";

type sectionOptionsIcons={
  [key:string]:object;
}

interface NavbarAsideSection {
  sectionName: string,
  sectionOptions: string[],
  sectionOptionsIcons: sectionOptionsIcons
}

export function NavbarAsideSection({
  sectionName,
  sectionOptions,
  sectionOptionsIcons
}: NavbarAsideSection) {
  

  return (
    <ul className="py-2 flex flex-col">
      <span className="font-bold text-xl pl-2">{sectionName}</span>
      {sectionOptions.map(
        (option, index): ReactNode => (
          <li className="flex justify-start group" key={index}><label>{sectionOptionsIcons[index]}<a href="#" className="hover:bg-youtube-dark text-[0.95rem] block w-full p-2">{option}</a></label></li>
        )
      )}
    </ul>
  );
}
