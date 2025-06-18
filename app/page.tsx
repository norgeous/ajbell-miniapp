'use client';

import { useState } from 'react';
import StrategySelector from '@/components/StrategySelector';
import Fund from '@/components/Fund';
import cautiousMockData from '@/mocks/Cautious.json';
import balancedMockData from '@/mocks/Balanced.json';
import adventurousMockData from '@/mocks/Adventurous.json';
import responsibleMockData from '@/mocks/Responsible.json';
import MultiButton from '@/components/MultiButton';

const idToData = {
  BYW8RV9: cautiousMockData,
  BYW8RX1: balancedMockData,
  BYW8VG2: adventurousMockData,
  BN0S2V9: responsibleMockData,
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
  const [selectedStrategy, setSelectedStrategy] = useState('');
  const [selectedFund, setSelectedFund] = useState('');

  // const id =
  //   investmentStrategies[selectedStrategy]?.fundOptions[selectedFund]
  //     ?.id;

  // const data = id && idToData[id];

  const id = investmentStrategies
    .find(({ name }) => name === selectedStrategy)
    ?.fundOptions.find(({ fundName }) => fundName === selectedFund)?.id;

  const data = id && idToData[id];

  return (
    <>
      <MultiButton
        labels={investmentStrategies.map(({ name }) => name)}
        onClick={label => {
          setSelectedStrategy(label);
          setSelectedFund(''); // reset Fund selection to nothing
        }}
      />
      {selectedStrategy && (
        <MultiButton
          labels={
            investmentStrategies
              .find(({ name }) => name === selectedStrategy)
              ?.fundOptions.map(({ fundName }) => fundName) || []
          }
          onClick={setSelectedFund}
        />
      )}
      {data && <Fund data={data} />}
    </>
  );
};

export default Home;
