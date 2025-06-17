import formatDate from '@/helpers/formatDate';
import GradientRating from '../GradientRating';
import PieChart from '../PieChart';
import StarRating from '../StarRating';
import DataTable from '../Table';

import { FaExternalLinkAlt } from 'react-icons/fa';

const ExternalLink = ({ href, children }) => (
  <a href={href} target="_blank" style={{ display: 'block' }}>
    {children} <FaExternalLinkAlt />
  </a>
);

interface IFund {
  data: any;
}

const Fund = ({ data }: IFund) => {
  return (
    <>
      <h1>{data.data.quote.name}</h1>
      <div>{data.data.quote.sectorName}</div>
      <p>{data.data.profile.objective}</p>
      <StarRating value={data.data.ratings.analystRating} />
      <GradientRating value={data.data.ratings.SRRI} />
      <div>{data.data.ratings.analystRatingLabel}</div>
      <div>
        last price: {data.data.quote.currency} {data.data.quote.lastPrice} (
        {formatDate(data.data.quote.lastPriceDate)})
      </div>
      <div>Ongoing charge: {data.data.quote.ongoingCharge}%</div>
      <PieChart values={data.data.portfolio.asset} />
      {data.data.documents.map(({ id, type, url }) => (
        <ExternalLink key={id} href={url}>
          {type}
        </ExternalLink>
      ))}
      <DataTable
        headings={['Holding', 'Weight']}
        data={data.data.portfolio.top10Holdings.map(({ name, weighting }) => ({
          name,
          weighting: `${weighting.toFixed(2)}%`,
        }))}
      />
      <hr />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

export default Fund;
