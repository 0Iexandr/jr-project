import Image from 'next/image';

export const MobileGallery = ({ itemData }) => {
  return (
    <ul className=" flex flex-col gap-[60px] md:gap-[100px]">
      {itemData.map(item => (
        <li key={item.url}>
          <Image
            className="h-auto w-full "
            src={item.url}
            alt={item.alt}
            width={item.width}
            height={item.height}
          />
        </li>
      ))}
    </ul>
  );
};
