import { Container } from '@/components';
import dynamic from 'next/dynamic';

const DynamicTeamMember = dynamic(() =>
  import('../../components/TeamMember/TeamMember'),
);

export const TeamCopy = ({ data }) => {
  return (
    <section id="team" className="mb-[80px]">
      <Container>
        <h2 className="sectionTitle mb-[32px] font-bold md:mb-[50px] xl:mb-[76px]">
          TeamCopy
        </h2>
        <ul className="flex flex-col gap-[60px] md:gap-[100px] xl:flex-row xl:justify-between xl:gap-[60px] ">
          {data.map(person => {
            return (
              <li
                key={person.id}
                className="mx-auto text-start md:w-[412px] xl:w-[386px]"
              >
                <DynamicTeamMember person={person} />
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};
