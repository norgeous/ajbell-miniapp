import StrategySelector from '@/components/StrategySelector';
import Fund from '@/components/Fund';
import cautiousMockData from '@/mocks/Cautious.json';

const investmentStrategies = [
  {
    name: 'Growth Funds Variations',
    fundOptions: [
      { id: 'BYW8RV9', fundName: 'Cautious' },
      { id: 'BYW8RX1', fundName: 'Balanced' },
      { id: 'BYW8VG2', fundName: 'Adventurous' },
    ],
  },
  {
    name: 'Responsible Growth Fund',
    fundOptions: [{ id: 'BN0S2V9', fundName: 'Responsible' }],
  },
];

const Home = () => {
  return (
    <>
      <StrategySelector investmentStrategies={investmentStrategies} />
      <Fund data={cautiousMockData} />
    </>
  );
};

export default Home;
