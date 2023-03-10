import { Container, NavBar } from '@/components';
import { Logo } from 'components/Logo/Logo';

export const Header = () => {
  return (
    <header className="sticky top-0 z-30 flex h-[50px] w-full items-center bg-white xl:h-[64px]">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-[20px] md:gap-x-[40px]">
            <Logo isClickable={true} />
            <p className="text-[10px] uppercase text-gray max-md:max-w-[135px] md:text-small xl:hidden">
              3D Architectural Rendering Studio
            </p>
          </div>
          <NavBar />
        </div>
      </Container>
    </header>
  );
};
