import Fund from '@/components/Fund';
import cautiousMockData from '@/mocks/Cautious.json';

const investmentStrategies = [
  {
    name: 'Growth Funds Variations',
    fundOptions: [
      { name: 'Cautious', endpointId: 'BYW8RV9' },
      { name: 'Balanced', endpointId: 'BYW8RX1' },
      { name: 'Adventurous', endpointId: 'BYW8VG2' },
    ],
  },
  {
    name: 'Responsible Growth Fund',
    fundOptions: [{ name: 'Responsible', endpointId: 'BN0S2V9' }],
  },
];

const Home = () => {
  return (
    <>
      <pre>{JSON.stringify(investmentStrategies, null, 2)}</pre>
      <Fund data={cautiousMockData} />
    </>
  );
};

export default Home;
