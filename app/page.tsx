'use client';

import { useState } from 'react';
import StrategySelector from '@/components/StrategySelector';
import Fund from '@/components/Fund';
import cautiousMockData from '@/mocks/Cautious.json';
import balancedMockData from '@/mocks/Balanced.json';
import adventurousMockData from '@/mocks/Adventurous.json';

const idToData = {
  BYW8RV9: cautiousMockData,
  BYW8RX1: balancedMockData,
  BYW8VG2: adventurousMockData,
};

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
  const [selectedStrategyIndex, setSelectedStrategyIndex] = useState<
    number | undefined
  >(undefined);

  const [selectedFundIndex, setSelectedFundIndex] = useState<
    number | undefined
  >(undefined);

  const id =
    investmentStrategies[selectedStrategyIndex]?.fundOptions[selectedFundIndex]
      ?.id;

  console.log({ id });
  const data = id && idToData[id];

  return (
    <>
      <StrategySelector
        investmentStrategies={investmentStrategies}
        selectedStrategyIndex={selectedStrategyIndex}
        setSelectedStrategyIndex={setSelectedStrategyIndex}
        setSelectedFundIndex={setSelectedFundIndex}
      />
      ssi:{selectedStrategyIndex}
      sfi:{selectedFundIndex}
      {/* id:{id} */}
      {data && <Fund data={data} />}
    </>
  );
};

export default Home;
