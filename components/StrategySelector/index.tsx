'use client';

import { useState } from 'react';
import MultiButton from '@/components/MultiButton';

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

const StrategySelector = ({ onSelectFund }) => {
  const [selectedStrategy, setSelectedStrategy] = useState('');

  return (
    <>
      <MultiButton
        labels={investmentStrategies.map(({ name }) => name)}
        onClick={label => {
          setSelectedStrategy(label);
          onSelectFund(''); // reset Fund selection to nothing
        }}
      />
      {selectedStrategy && (
        <MultiButton
          labels={
            investmentStrategies
              .find(({ name }) => name === selectedStrategy)
              ?.fundOptions.map(({ fundName }) => fundName) || []
          }
          onClick={label => {
            const id = investmentStrategies
              .find(({ name }) => name === selectedStrategy)
              ?.fundOptions.find(({ fundName }) => fundName === label)?.id;

            onSelectFund(id);
          }}
        />
      )}
    </>
  );
};

export default StrategySelector;
