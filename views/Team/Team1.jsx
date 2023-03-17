// import Image from 'next/image';
import React from 'react';
import { ModalBtn } from '@/components';
import { Container } from '@/components';
// import dynamic from 'next/dynamic';
// import TeamMember from 'components/TeamMember/TeamMember';

// const DynamicTeamMember = dynamic(() =>
//   import('../../components/TeamMember/TeamMember'),
// );
//  <TeamMember person={person} />;
export const Team1 = ({ data }) => {
  return (
    <section id="team" className="mb-[80px]">
      <Container>
        <h2 className="sectionTitle mb-[32px] font-bold md:mb-[50px] xl:mb-[76px]">
          Team
        </h2>
        <ul className="flex flex-col gap-[60px] md:gap-[100px] xl:flex-row xl:justify-between xl:gap-[60px] ">
          {data.map(person => {
            return (
              <li
                key={person.id}
                className="mx-auto text-start md:w-[412px] xl:w-[386px]"
              >
                <ModalBtn text="send message" className="whiteBtn" />
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};
