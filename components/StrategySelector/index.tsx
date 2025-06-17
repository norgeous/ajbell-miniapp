'use client';

import { useState } from 'react';

interface IStrategySelector {
  investmentStrategies: {
    name: string;
    fundOptions: {
      fundName: string;
      id: string;
    }[];
  }[];
}

const StrategySelector = ({ investmentStrategies }: IStrategySelector) => {
  const [selectedStrategyIndex, setSelectedStrategyIndex] = useState<
    number | undefined
  >(undefined);

  const [selectedFundIndex, setSelectedFundIndex] = useState<
    number | undefined
  >(undefined);

  return (
    <>
      {investmentStrategies.map(({ name }, index) => (
        <button key={name} onClick={() => setSelectedStrategyIndex(index)}>
          {name}
        </button>
      ))}
      {selectedStrategyIndex !== undefined && (
        <div>
          {investmentStrategies[selectedStrategyIndex].fundOptions.map(
            ({ fundName }, index) => (
              <button
                key={fundName}
                onClick={() => setSelectedFundIndex(index)}
              >
                {fundName}
              </button>
            ),
          )}
        </div>
      )}
    </>
  );
};
export default StrategySelector;
