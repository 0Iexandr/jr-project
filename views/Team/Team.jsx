import PropTypes from 'prop-types';
import Container from 'components/Container/Container';
import React from 'react';
import TeamMember from 'components/TeamMember/TeamMember';

const Team = ({ data }) => {
  return (
    <section id="team" className="sections__padding">
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
                <TeamMember person={person} />
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default Team;

Team.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape),
};
