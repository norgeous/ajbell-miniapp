'use client';

import { useState } from 'react';
import StrategySelector from '@/components/StrategySelector';
import Fund from '@/components/Fund';
import cautiousMockData from '@/mocks/Cautious.json';
import balancedMockData from '@/mocks/Balanced.json';
import adventurousMockData from '@/mocks/Adventurous.json';
import responsibleMockData from '@/mocks/Responsible.json';
import { AJBellResponseType } from '@/helpers/endpoint';

const idToMockData = {
  BYW8RV9: cautiousMockData,
  BYW8RX1: balancedMockData,
  BYW8VG2: adventurousMockData,
  BN0S2V9: responsibleMockData,
};

type MockIdsType = keyof typeof idToMockData | '';

const Home = () => {
  const [selectedFundId, setSelectedFundId] = useState<MockIdsType>('');
  const data = selectedFundId && idToMockData[selectedFundId];

  return (
    <>
      <StrategySelector onSelectFund={setSelectedFundId} />
      {data && <Fund data={data as AJBellResponseType} />}
    </>
  );
};

export default Home;
