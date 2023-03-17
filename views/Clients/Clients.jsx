import Container from 'components/Container/Container';
import ClientsSlider from 'components/ClientsSlider/ClientsSlider';

const Clients = ({ data }) => {
  return (
    <section className="mb-[80px]">
      <Container>
        <h2 className="mb-8 text-3xl font-bold md:mb-10 md:text-[34px] md:leading-10 xl:mb-[4.75rem] xl:text-large">
          Clients
        </h2>
        <ClientsSlider sliderImages={data?.sliderImages} />
      </Container>
    </section>
  );
};
export default Clients;
