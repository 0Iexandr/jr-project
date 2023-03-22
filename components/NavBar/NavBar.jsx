import NavSections from 'components/NavSections/NavSections';

const NavBar = () => {
  return (
    <nav className="flex items-center xl:gap-x-[50px]">
      <NavSections className="hidden gap-x-[36px] text-middle xl:flex" />
    </nav>
  );
};

export default NavBar;
