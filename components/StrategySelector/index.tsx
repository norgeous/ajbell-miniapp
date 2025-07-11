'use client';

import MultiButton from '@/components/MultiButton';
import useLocalStorage from '@/hooks/useLocalStorage';
import { Wrap } from './styled';

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

interface IStrategySelector {
  onSelectFund: (id: string) => void;
}

const StrategySelector = ({ onSelectFund }: IStrategySelector) => {
  const [selectedStrategy, setSelectedStrategy] = useLocalStorage(
    'strategy',
    '',
  );

  return (
    <Wrap>
      <p>1. Tell us why you’re investing</p>
      <MultiButton
        labels={investmentStrategies.map(({ name }) => name)}
        onClick={label => {
          setSelectedStrategy(label);
          onSelectFund(''); // reset Fund selection to nothing
        }}
      />
      {selectedStrategy && (
        <>
          <p>2. Choose your fund</p>
          <MultiButton
            labels={
              investmentStrategies
                .find(({ name }) => name === selectedStrategy)
                ?.fundOptions.map(({ fundName }) => fundName) || []
            }
            onClick={label => {
              const id =
                investmentStrategies
                  .find(({ name }) => name === selectedStrategy)
                  ?.fundOptions.find(({ fundName }) => fundName === label)
                  ?.id || '';

              onSelectFund(id);
            }}
          />
        </>
      )}
    </Wrap>
  );
};

export default StrategySelector;
