import { navItems } from "../constants/NavMenuItems";

const NavBar = () => {
  return (
    <nav className="w-full flex justify-between items-center bg-[#222222] py-4 px-6 rounded-lg container mx-auto">
      <div className="text-xl font-body-medium text-white">GymFit</div>
      <ul className="flex gap-6 text-white font-primary font-light">
        {navItems.map((item, index) => {
          return (
            <li key={index} className="cursor-pointer">
              {item.name}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
