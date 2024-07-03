import React from "react";

type Props = {
  activeItem: number;
};

const navItems = [
  {
    title: "Inicio",
    href: "/",
  },
  {
    title: "Nosotros",
    href: "/",
  },
  {
    title: "Participantes",
    href: "/",
  },
  {
    title: "Galeria",
    href: "/",
  },
  {
    title: "Contacto",
    href: "/",
  },
];

const Navigation = ({ activeItem }: Props) => {
  return (
    <div className="block md:flex">
      {navItems.map((item, index) => (
        <div key={item.title}>
          <h5
            className={`inline-block md:px-4 xl:px-8 py-5 md:py-0 text-[18px] font-[500] font-Inter ${activeItem === index && "text-primaryLanding"} `}
          >
            {item.title}
          </h5>
        </div>
      ))}
    </div>
  );
};

export default Navigation;
