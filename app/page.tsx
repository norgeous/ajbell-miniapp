'use client';

import { useState } from 'react';
import StrategySelector from '@/components/StrategySelector';
import Fund from '@/components/Fund';
import cautiousMockData from '@/mocks/Cautious.json';
import balancedMockData from '@/mocks/Balanced.json';
import adventurousMockData from '@/mocks/Adventurous.json';
import responsibleMockData from '@/mocks/Responsible.json';

const idToData = {
  BYW8RV9: cautiousMockData,
  BYW8RX1: balancedMockData,
  BYW8VG2: adventurousMockData,
  BN0S2V9: responsibleMockData,
};

const Home = () => {
  const [selectedFundId, setSelectedFundId] = useState('');

  const data = selectedFundId && idToData[selectedFundId];

  return (
    <>
      <StrategySelector onSelectFund={setSelectedFundId} />
      {data && <Fund data={data} />}
    </>
  );
};

export default Home;
