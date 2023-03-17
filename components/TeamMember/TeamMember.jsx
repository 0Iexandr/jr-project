import React from 'react';
import { ModalBtn } from 'components/ModalBtn/ModalBtn';
import dynamic from 'next/dynamic';

const DynamicImage = dynamic(() => import('next/image'));

export default function TeamMember({ person }) {
  return (
    <>
      <DynamicImage
        loading="lazy"
        src={person.photo.url}
        alt={person.name}
        width={person.photo.width}
        height={person.photo.height}
        className="mb-[24px]"
      />
      <p className="mb-[14px] text-[14px] leading-[20px] text-gray">
        {person.role}
      </p>
      <h3 className="sectionSubtitle mb-[14px] font-bold">{person.name}</h3>
      <p className="mb-[24px] text-middle font-normal text-gray">
        {person.description}
      </p>
      <ModalBtn text="send message" className="whiteBtn" />
    </>
  );
}

// export default TeamMember;
