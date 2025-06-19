import formatDate from '@/helpers/formatDate';
import formatCurrency from '@/helpers/formatCurrency';
import formatPercent from '@/helpers/formatPercent';
import { AJBellResponseType } from '@/helpers/endpoint';
import GradientRating from '@/components/GradientRating';
import PieChart from '@/components/PieChart';
import StarRating from '@/components/StarRating';
import DataTable from '@/components/Table';
import ExternalLink from '@/components/ExternalLink';
import GlassCard from '../GlassCard';
import ResponsiveColumn from '../ResponsiveColumn';

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
            <p>{data.data.profile.objective}</p>
          </div>
          <div>
            <PieChart values={data.data.portfolio.asset} />

            {data.data.ratings.SRRI && (
              <GradientRating value={data.data.ratings.SRRI} />
            )}
            <StarRating value={data.data.ratings.analystRating} />

            <div>{data.data.ratings.analystRatingLabel}</div>

            <div>
              <h3>Documents</h3>
              {data.data.documents.map(({ id, type, url }) => (
                <ExternalLink key={id} href={url}>
                  {type}
                </ExternalLink>
              ))}
            </div>
          </div>
        </ResponsiveColumn>

        <DataTable
          data={[
            {
              title: `Last Price (${formatDate(data.data.quote.lastPriceDate)})`,
              value: `${formatCurrency(data.data.quote.lastPrice, data.data.quote.currency)}`,
            },
            {
              title: `Ongoing Charge`,
              value: formatPercent(data.data.quote.ongoingCharge),
            },
          ]}
        />
        <DataTable
          headings={['Holding', 'Weight']}
          data={data.data.portfolio.top10Holdings.map(
            ({ name, weighting }) => ({
              name,
              weighting: formatPercent(weighting),
            }),
          )}
        />
      </GlassCard>
    </>
  );
};

export default Fund;
