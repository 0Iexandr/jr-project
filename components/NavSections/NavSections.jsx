import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';

const NavSections = ({ className, setIsNavOpen }) => {
  const sections = ['Services', 'About us', 'Works', 'Contact', 'Career'];
  const isDesktop = useMediaQuery({
    query: '(min-width: 1320px)',
  });

  return (
    <ul className={className}>
      {sections?.map((sectionName, idx) => {
        return (
          <li key={idx}>
            <Link
              offset={20}
              href="/"
              activeClass="nav-active"
              smooth={true}
              spy={true}
              className="cursor-pointer"
              to={sectionName.toLowerCase()}
              onClick={!isDesktop ? setIsNavOpen : null}
            >
              {sectionName}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default NavSections;

NavSections.propTypes = {
  className: PropTypes.string,
};
