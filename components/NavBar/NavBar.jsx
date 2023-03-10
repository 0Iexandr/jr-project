import { Logo } from 'components/Logo/Logo';
import { ModalBtn } from 'components/ModalBtn/ModalBtn';
import Image from 'next/image';
import { useState } from 'react';
import { Link } from 'react-scroll';

export const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav className="flex items-center xl:gap-x-[50px]">
      <ul className="hidden gap-x-[36px] text-middle xl:flex">
        <li>
          <Link
            activeClass="nav-active"
            smooth
            spy
            className="cursor-pointer"
            to="services"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            activeClass="nav-active"
            smooth
            spy
            className="cursor-pointer"
            to="about"
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            activeClass="nav-active"
            smooth
            spy
            className="cursor-pointer"
            to="works"
          >
            Works
          </Link>
        </li>
        <li>
          <Link
            activeClass="nav-active"
            smooth
            spy
            className="cursor-pointer"
            to="contact"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            activeClass="nav-active"
            smooth
            spy
            className="cursor-pointer"
            to="career"
          >
            Career
          </Link>
        </li>
      </ul>
      <ModalBtn text="start project" className="max-xl:hidden" />
      <div className="flex xl:hidden">
        <button onClick={() => setIsNavOpen(prev => !prev)}>
          <Image src="/burger.svg" alt="menu" width={35} height={16} />
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
            <li>
              <Link
                activeClass="nav-active"
                smooth
                spy
                className="cursor-pointer"
                to="services"
                onClick={() => setIsNavOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                activeClass="nav-active"
                smooth
                spy
                className="cursor-pointer"
                to="about"
                onClick={() => setIsNavOpen(false)}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                activeClass="nav-active"
                smooth
                spy
                className="cursor-pointer"
                to="works"
                onClick={() => setIsNavOpen(false)}
              >
                Works
              </Link>
            </li>
            <li>
              <Link
                activeClass="nav-active"
                smooth
                spy
                className="cursor-pointer"
                to="contact"
                onClick={() => setIsNavOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                activeClass="nav-active"
                smooth
                spy
                className="cursor-pointer"
                to="career"
                onClick={() => setIsNavOpen(false)}
              >
                Career
              </Link>
            </li>
          </ul>
          <ModalBtn text="start project" className="mt-[60px] text-center" />
        </div>
      </div>
    </nav>
  );
};
