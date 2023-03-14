import { Logo } from 'components/Logo/Logo';
import { ModalBtn } from 'components/ModalBtn/ModalBtn';
import Image from 'next/image';
import { useState } from 'react';
import { Link } from 'react-scroll';

export const BurgerMenu = () => {
  const sections = ['Services', 'About us', 'Works', 'Contact', 'Career'];
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="flex xl:hidden">
      <button onClick={() => setIsNavOpen(prev => !prev)}>
        <Image src="/burger.svg" alt="menu" width={35} height={18} />
      </button>
      <div
        className={
          isNavOpen
            ? 'container absolute top-0 left-0 right-0 flex h-screen flex-col items-center bg-white pt-[110px] md:pt-[150px]'
            : 'hidden'
        }
      >
        <div className="container absolute top-[17px] right-0 flex justify-between">
          <Logo isClickable={true} />
          <button onClick={() => setIsNavOpen(false)}>
            <Image src="/close.svg" alt="close" width={16} height={16} />
          </button>
        </div>
        <ul className="flex flex-col gap-y-[24px] text-center text-[24px] xl:flex">
          {sections?.map((sectionName, idx) => {
            return (
              <li key={idx}>
                <Link
                  activeClass="nav-active"
                  smooth={true}
                  spy={true}
                  className="cursor-pointer"
                  to={sectionName.toLowerCase()}
                  onClick={() => setIsNavOpen(false)}
                >
                  {sectionName}
                </Link>
              </li>
            );
          })}
        </ul>
        <ModalBtn text="start project" className="mt-[60px] text-center" />
      </div>
    </div>
  );
};
