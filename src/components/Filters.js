import React from "react";
import { GiFishingBoat, GiMineExplosion } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { ImKey } from "react-icons/im";
import { RiAliensFill } from "react-icons/ri";
import { BsFillTreeFill } from "react-icons/bs";
import { GiCampingTent } from "react-icons/gi";
import { GiIsland } from "react-icons/gi";
import { MdSurfing } from "react-icons/md";
import { FiCoffee } from "react-icons/fi";
import { GiTreehouse } from "react-icons/gi";
import Filter from "./Filter";
// Filtering based on themes
const Filters = () => {
  const sorting = [
    { title: "Home", icon: <FaHome /> },
    { title: "Boat", icon: <GiFishingBoat /> },
    { title: "New", icon: <GiMineExplosion /> },
    { title: "Unique", icon: <RiAliensFill /> },
    { title: "Private", icon: <ImKey /> },
    { title: "Forest", icon: <BsFillTreeFill /> },
    { title: "Camping", icon: <GiCampingTent /> },
    { title: "Island", icon: <GiIsland /> },
    { title: "Surfing", icon: <MdSurfing /> },
    { title: "Coffee & breakfast", icon: <FiCoffee /> },
    { title: "Treehouse", icon: <GiTreehouse /> },
  ];

  return (
    <div className="flex justify-start  gap-3 sm:gap-4  mt-4  ">
      {sorting.map((obj) => (
        <Filter title={obj.title} icon={obj.icon} />
      ))}
    </div>
  );
};

export default Filters;