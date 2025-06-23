import formatDate from '@/helpers/formatDate';
import formatCurrency from '@/helpers/formatCurrency';
import formatPercent from '@/helpers/formatPercent';
import { AJBellResponseType } from '@/helpers/endpoint';
import GradientRating from '@/components/GradientRating';
import PieChart from '@/components/PieChart';
import StarRating from '@/components/StarRating';
import DataTable from '@/components/Table';
import GlassCard from '@/components/GlassCard';
import ResponsiveColumn from '@/components/ResponsiveColumn';
import Button from '@/components/Button';
import Documents from '../Documents';

interface IFund {
  data: AJBellResponseType;
}

const Fund = ({ data }: IFund) => {
  return (
    <>
      <GlassCard>
        <h1>{data.data.quote.name}</h1>

        <h2>{data.data.quote.sectorName}</h2>

        <ResponsiveColumn>
          <div>
            {data.data.ratings.SRRI && (
              <GradientRating value={data.data.ratings.SRRI} />
            )}

            <p>{data.data.profile.objective}</p>
          </div>
          <div>
            <PieChart values={data.data.portfolio.asset} />

            <StarRating value={data.data.ratings.analystRating} />

            <Documents documents={data.data.documents} />
          </div>
        </ResponsiveColumn>

        <DataTable
          headings={[]}
          data={[
            {
              title: `Last Price (${formatDate(data.data.quote.lastPriceDate)})`,
              value: `${formatCurrency(data.data.quote.lastPrice, data.data.quote.currency)}`,
            },
            {
              title: 'Analyst Rating',
              value: data.data.ratings.analystRatingLabel,
            },
            {
              title: 'Ongoing Charge',
              value: formatPercent(data.data.quote.ongoingCharge),
            },
          ]}
        />

        <h3>Top 10 Holdings</h3>
        <DataTable
          headings={['Holding', 'Weight']}
          data={data.data.portfolio.top10Holdings.map(
            ({ name, weighting }) => ({
              name,
              weighting: formatPercent(weighting),
            }),
          )}
        />

        <Button>Invest Today!</Button>
      </GlassCard>
    </>
  );
};

export default Fund;
