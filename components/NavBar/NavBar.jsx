import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';
// import { useState } from 'react';
// import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-scroll';

export const NavBar = () => {
  // const isDesktop = useMediaQuery({
  //   query: '(min-width: 1320px)',
  // });
  // const [isNavOpen, setIsNavOpen] = useState(false);
  const sections = ['Services', 'About us', 'Works', 'Contact', 'Career'];
  return (
    <nav className="flex items-center xl:gap-x-[50px]">
      <ul className="hidden gap-x-[36px] text-middle xl:flex">
        {sections?.map((sectionName, idx) => {
          return (
            <li key={idx}>
              <Link
                activeClass="nav-active"
                smooth={true}
                spy={true}
                className="cursor-pointer"
                to={sectionName.toLowerCase()}
                // onClick={!isDesktop ? () => setIsNavOpen(false) : null}
              >
                {sectionName}
              </Link>
            </li>
          );
        })}
      </ul>
      <BurgerMenu />
    </nav>
  );
};
