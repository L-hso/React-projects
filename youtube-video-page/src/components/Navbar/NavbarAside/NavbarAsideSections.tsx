import { ReactNode } from "react";

interface NavbarAsideSection {
  sectionName: string;
  sectionOptions: string[];
}

export function NavbarAsideSection({
  sectionName,
  sectionOptions,
}: NavbarAsideSection): ReactNode {
  return (
    <ul className="py-4">
      <span className="text-xl font-bold">{sectionName}</span>
      {sectionOptions.map(
        (option, index): ReactNode => (
          <li key={index} className="px-1 py-2 bg-zinc-800">{option}</li>
        )
      )}
    </ul>
  );
}
