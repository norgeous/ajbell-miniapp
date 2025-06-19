import FundPage from '@/components/FundPage';

// https://nextjs.org/docs/app/api-reference/functions/fetch#fetchurl-options
const fetcher = (url: string) =>
  fetch(url, { cache: 'force-cache' })
    .then(res => {
      if (res.status !== 200) throw new Error('oof not 200');
      return res.json();
    })
    .catch(err => {
      console.warn('caught the error', err);
    });

const ids = [
  'BYW8RV9', // Cautious
  'BYW8RX1', // Balanced
  'BYW8VG2', // Adventurous
  'BN0S2V9', // Responsible
];

const fetchAll = Promise.allSettled(
  ids.map(id =>
    fetcher(`https://cdn.core3-dev.ajbbuild.uk/interview/${id}.json`)
  )
).then(responses =>
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
