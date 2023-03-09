import { Container } from '@/components';
import Action from 'components/Action/Action';

function Career({ sectionData }) {
  return (
    <section>
      <Container>
        <Action params={sectionData} />
      </Container>
    </section>
  );
}

export default Career;
