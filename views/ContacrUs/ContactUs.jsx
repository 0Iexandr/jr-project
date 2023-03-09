import { Container } from '@/components';
import Action from 'components/Action/Action';

function ContactUs({ sectionData }) {
  return (
    <section>
      <Container>
        <Action params={sectionData} />
      </Container>
    </section>
  );
}

export default ContactUs;
