import { Logo } from 'components/Logo/Logo';
import { ModalBtn } from 'components/ModalBtn/ModalBtn';
import { NavSections } from 'components/NavSections/NavSections';
import Image from 'next/image';

export const BurgerMenu = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <div className="flex xl:hidden ">
      <button onClick={() => setIsNavOpen(prev => !prev)}>
        <Image src="/burger.svg" alt="menu" width={35} height={18} />
      </button>
      <div
        className={
          isNavOpen
            ? 'container absolute top-0 left-0 right-0 flex h-screen flex-col items-center bg-white pt-[110px] transition-all md:pt-[150px]'
            : 'hidden'
        }
      >
        <div className="container absolute top-[17px] right-0 flex justify-between">
          <Logo
            isClickable={true}
            className="h-[24px] w-[40px] md:h-[30px] md:w-[50px] xl:h-[48px] xl:w-[80px]"
          />
          <button onClick={() => setIsNavOpen(false)}>
            <Image src="/close.svg" alt="close" width={16} height={16} />
          </button>
        </div>
        <NavSections
          className="flex flex-col gap-y-[24px] text-center text-[24px] xl:flex"
          setIsNavOpen={() => setIsNavOpen(false)}
        />
        <ModalBtn
          text="start project"
          className="blackBtn mt-[60px] text-center"
        />
      </div>
    </div>
  );
};
