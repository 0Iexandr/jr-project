import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import Container from 'components/Container/Container';
import HeaderTitle from 'components/HeaderTitle/HeaderTitle';
import Logo from 'components/Logo/Logo';
import ModalBtn from 'components/ModalBtn/ModalBtn';
import NavBar from 'components/NavBar/NavBar';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const DynamicBurgerMenu = dynamic(() =>
  import(
    /* webpackChunkName: "BurgerMenu" */ '../../components/BurgerMenu/BurgerMenu'
  ),
);

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    isNavOpen
      ? disableBodyScroll(DynamicBurgerMenu)
      : enableBodyScroll(DynamicBurgerMenu);
  }, [isNavOpen]);

  return (
    <header className="sticky top-0 z-30 flex h-[50px] w-full items-center bg-white xl:h-[64px]">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-[20px] md:gap-x-[40px]">
            <Logo
              isClickable={true}
              className="h-[24px] w-[40px] md:h-[30px] md:w-[50px] xl:h-[48px] xl:w-[80px]"
            />
            <HeaderTitle />
          </div>
          <div className="flex gap-x-[50px]">
            <NavBar />
            <ModalBtn text="start project" className="blackBtn max-xl:hidden" />
          </div>
          <button
            onClick={() => setIsNavOpen(prev => !prev)}
            aria-label="next-element"
            className="ml-auto xl:hidden"
          >
            <Image src="/burger.svg" alt="menu" width={35} height={18} />
          </button>
          <DynamicBurgerMenu
            isNavOpen={isNavOpen}
            setIsNavOpen={setIsNavOpen}
          />
        </div>
      </Container>
    </header>
  );
};

export default Header;
