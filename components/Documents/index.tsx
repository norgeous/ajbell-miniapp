import ExternalLink from '@/components/ExternalLink';

interface IDocuments {
  documents: {
    id: string;
    type: string;
    url: string;
  }[];
}

const Documents = ({ documents }: IDocuments) => {
  return (
    <div>
      <h3>Documents</h3>
      {documents.map(({ id, type, url }) => (
        <ExternalLink key={id} href={url}>
          {type}
        </ExternalLink>
      ))}
    </div>
  );
};

export default Documents;
