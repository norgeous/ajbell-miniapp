import FundPage from '@/components/FundPage';

const fetcher = (url: string) => fetch(url).then(res => res.json());

const fetchAll = Promise.all([
  fetcher('https://cdn.core3-dev.ajbbuild.uk/interview/BYW8RV9.json'), // Cautious
  fetcher('https://cdn.core3-dev.ajbbuild.uk/interview/BYW8RX1.json'), // Balanced
  fetcher('https://cdn.core3-dev.ajbbuild.uk/interview/BYW8VG2.json'), // Adventurous
  fetcher('https://cdn.core3-dev.ajbbuild.uk/interview/BN0S2V9.json'), // Responsible
]);

const Home = async () => {
  const allData = await fetchAll;

  return (
    <>
      <FundPage allData={allData} />
    </>
  );
};

export default Home;
