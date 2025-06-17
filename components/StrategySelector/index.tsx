'use client';

import { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 1em;
`;

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
      <div>
        {investmentStrategies.map(({ name }, index) => (
          <Button key={name} onClick={() => setSelectedStrategyIndex(index)}>
            {name}
          </Button>
        ))}
      </div>
      {selectedStrategyIndex !== undefined && (
        <div>
          {investmentStrategies[selectedStrategyIndex].fundOptions.map(
            ({ fundName }, index) => (
              <Button
                key={fundName}
                onClick={() => setSelectedFundIndex(index)}
              >
                {fundName}
              </Button>
            ),
          )}
        </div>
      )}
    </>
  );
};

export default StrategySelector;
