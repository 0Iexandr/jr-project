import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
import NavSections from 'components/NavSections/NavSections';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const DynamicBurgerMenu = dynamic(() =>
  import(/* webpackChunkName: "BurgerMenu" */ '../BurgerMenu/BurgerMenu'),
);

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  isNavOpen ? disableBodyScroll(BurgerMenu) : enableBodyScroll(BurgerMenu);
  return (
    <nav className="flex items-center xl:gap-x-[50px]">
      <NavSections className="hidden gap-x-[36px] text-middle xl:flex" />
      <DynamicBurgerMenu isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
    </nav>
  );
};
export default NavBar;
