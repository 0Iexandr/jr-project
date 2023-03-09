import { Button } from 'components/Button/Button';
import Image from 'next/image';
import { Container } from 'components/Container/Container';

const dataForServicesRender = [
  {
    id: 1,
    image: {
      url: 'https://randomuser.me/api/portraits/lego/4.jpg',
      alt: 'lego',
    },
    textBlock: {
      title: 'Aerial',
      discription:
        'See how your residential and commercial project look from the clouds with 3D aerial visualization tools',
      btnText: 'Start Project',
    },
  },
  {
    id: 2,
    image: {
      url: 'https://randomuser.me/api/portraits/lego/2.jpg',
      alt: 'lego',
    },
    textBlock: {
      title: '3D Exterior',
      discription:
        'Let your projects shine in a new light to spark interest and catch attention with 3D exterior visualization',
      btnText: 'Start Project',
    },
  },
  {
    id: 3,
    image: {
      url: 'https://randomuser.me/api/portraits/lego/3.jpg',
      alt: 'lego',
    },
    textBlock: {
      title: '3D Interior',
      discription:
        'Communicate the elegance of your design ideas to clients and the community in the best possible way with 3D interior rendering',
      btnText: 'Start Project',
    },
  },
];

export const Services = () => {
  return (
    <section>
      <Container>
        <ul>
          {dataForServicesRender.map(el => {
            return (
              <li key={el.id}>
                <Image
                  src={el.image.url}
                  alt={el.image.alt}
                  width={500}
                  height={500}
                />
                <div>
                  <h3>{el.textBlock.title}</h3>
                  <p>{el.textBlock.discription}</p>
                  <Button text={el.textBlock.btnText} />
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};
