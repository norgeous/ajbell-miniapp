import GradientRating from '../GradientRating';
import PieChart from '../PieChart';
import StarRating from '../StarRating';

const ExternalLink = ({ href, children }) => (
  <a href={href} target="_blank" style={{ display: 'block' }}>
    {children}
    ➡️
  </a>
);

const Table = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

interface IFund {
  data: any;
}

const Fund = ({ data }: IFund) => {
  return (
    <>
      <h1>{data.data.quote.name}</h1>
      <p>{data.data.profile.objective}</p>
      <StarRating value={data.data.ratings.analystRating} />
      <GradientRating value={data.data.ratings.SRRI} />
      <div>{data.data.ratings.analystRatingLabel}</div>
      <PieChart values={data.data.portfolio.asset} />
      {data.data.documents.map(({ id, type, url }) => (
        <ExternalLink key={id} href={url}>
          {type}
        </ExternalLink>
      ))}
      <Table data={data.data.portfolio.top10Holdings} />
      <div>£{data.data.quote.lastPrice}</div>
      <div>£{data.data.quote.ongoingCharge}</div>
      <div>{data.data.quote.sectorName}</div>
      {/* <hr /> */}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </>
  );
};

export default Fund;
