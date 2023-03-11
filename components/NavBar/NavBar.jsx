import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';
import { Link } from 'react-scroll';

export const NavBar = () => {
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
