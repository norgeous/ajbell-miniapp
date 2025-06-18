import FundPage from '@/components/FundPage';

// https://nextjs.org/docs/app/api-reference/functions/fetch#fetchurl-options
const fetcher = (url: string) =>
  fetch(url, { cache: 'force-cache' })
    .then(res => {
      if (res.status !== 200) throw new Error('oof');
      return res.json();
    })
    .catch(err => {
      console.warn('caught the error', err);
    });

const ids = ['BYW8RV9', 'BYW8RX1', 'BYW8VG2', 'BN0S2V9'];

const fetchAll = Promise.allSettled([
  fetcher('https://cdn.core3-dev.ajbbuild.uk/interview/BYW8RV9.json'), // Cautious
  fetcher('https://cdn.core3-dev.ajbbuild.uk/interview/BYW8RX1.json'), // Balanced
  fetcher('https://cdn.core3-dev.ajbbuild.uk/interview/BYW8VG2.json'), // Adventurous
  fetcher('https://cdn.core3-dev.ajbbuild.uk/interview/BN0S2V9.json'), // Responsible
]).then(responses =>
  responses.reduce(
    (acc, response, index) => ({
      ...acc,
      [ids[index]]:
        response.status === 'fulfilled' ? response.value : undefined,
    }),
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
