import FundPage from '@/components/FundPage';
import { fetchAll } from '@/helpers/endpoint';

const Home = async () => {
  const allData = await fetchAll();
  return <FundPage allData={allData} />;
};

export default Home;
