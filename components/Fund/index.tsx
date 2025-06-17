import formatDate from '@/helpers/formatDate';
import formatCurrency from '@/helpers/formatCurrency';
import formatPercent from '@/helpers/formatPercent';

import GradientRating from '@/components/GradientRating';
import PieChart from '@/components/PieChart';
import StarRating from '@/components/StarRating';
import DataTable from '@/components/Table';
import ExternalLink from '@/components/ExternalLink';

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
        Last Price:{' '}
        {formatCurrency(data.data.quote.lastPrice, data.data.quote.currency)} (
        {formatDate(data.data.quote.lastPriceDate)})
      </div>
      <div>Ongoing Charge: {data.data.quote.ongoingCharge}%</div>
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
          weighting: formatPercent(weighting),
        }))}
      />
      <hr />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

export default Fund;
