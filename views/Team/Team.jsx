import { Container } from '@/components';
import Image from 'next/image';
import React from 'react';
import { ModalBtn } from 'components/ModalBtn/ModalBtn';

function Team({ data }) {
  console.log('data', data);
  return (
    <section id="team" className="mb-[80px]">
      <Container>
        <h2 className="sectionTitle mb-[32px] font-bold xl:mb-[76px]">Team</h2>
        <div className="flex flex-col gap-[60px] md:gap-[100px] xl:flex-row xl:justify-between xl:gap-[60px] ">
          {data.map(person => {
            return (
              <div
                key={person.id}
                className="mx-auto text-start md:w-[412px] xl:w-[386px]"
              >
                <Image
                  src={person.photo.url}
                  alt={person.name}
                  width={person.photo.width}
                  height={person.photo.height}
                  className="mb-[24px]"
                />
                <p className="mb-[14px] text-[14px] leading-[20px] text-gray">
                  {person.role}
                </p>
                <h3 className="sectionSubtitle mb-[14px] font-bold">
                  {person.name}
                </h3>
                <p className="mb-[24px] text-middle font-normal text-gray">
                  {person.description}
                </p>
                <ModalBtn text="send message" />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Team;
