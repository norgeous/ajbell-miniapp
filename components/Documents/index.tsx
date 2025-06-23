import ExternalLink from '@/components/ExternalLink';
import { Wrap } from './styled';

interface IDocuments {
  documents: {
    id: string;
    type: string;
    url: string;
  }[];
}

const Documents = ({ documents }: IDocuments) => {
  return (
    <Wrap>
      <h3>Documents</h3>
      {documents.map(({ id, type, url }) => (
        <ExternalLink key={id} href={url}>
          {type}
        </ExternalLink>
      ))}
    </Wrap>
  );
};

export default Documents;
