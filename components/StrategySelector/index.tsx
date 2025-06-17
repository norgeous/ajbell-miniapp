'use client';

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
  selectedStrategyIndex: number | undefined;
  setSelectedStrategyIndex: (i: number) => void;
  setSelectedFundIndex: (i: number) => void;
}

const StrategySelector = ({
  investmentStrategies,
  selectedStrategyIndex,
  setSelectedStrategyIndex,
  setSelectedFundIndex,
}: IStrategySelector) => {
  return (
    <>
      <div>
        {investmentStrategies.map(({ name }, index) => (
          <Button
            key={name}
            onClick={() => {
              setSelectedStrategyIndex(index);
              setSelectedFundIndex(undefined);
            }}
          >
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
