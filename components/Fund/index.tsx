import GradientRating from '../GradientRating';
import PieChart from '../PieChart';
import StarRating from '../StarRating';

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
      <PieChart values={data.data.portfolio.asset} />

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

export default Fund;
