import FundPage from '@/components/FundPage';

// https://nextjs.org/docs/app/api-reference/functions/fetch#fetchurl-options
const fetcher = (url: string) =>
  fetch(url, { cache: 'force-cache' }).then(res => res.json());

const ids = ['BYW8RV9', 'BYW8RX1', 'BYW8VG2', 'BN0S2V9'];

const fetchAll = Promise.all([
  fetcher('https://cdn.core3-dev.ajbbuild.uk/interview/BYW8RV9.json'), // Cautious
  fetcher('https://cdn.core3-dev.ajbbuild.uk/interview/BYW8RX1.json'), // Balanced
  fetcher('https://cdn.core3-dev.ajbbuild.uk/interview/BYW8VG2.json'), // Adventurous
  fetcher('https://cdn.core3-dev.ajbbuild.uk/interview/BN0S2V9.json'), // Responsible
]).then(responses =>
  responses.reduce(
    (acc, response, index) => ({ ...acc, [ids[index]]: response }),
    {}
  )
);

const Home = async () => {
  const allData = await fetchAll;

  return (
    <>
      <FundPage allData={allData} />
    </>
  );
};

export default Home;
