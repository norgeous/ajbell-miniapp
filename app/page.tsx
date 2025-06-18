'use client';

import { useState } from 'react';
import StrategySelector from '@/components/StrategySelector';
import Fund from '@/components/Fund';
import { idToMockData, MockIdsType } from '@/mocks/getMockById';

const Home = () => {
  const [selectedFundId, setSelectedFundId] = useState<MockIdsType>('');
  const data = selectedFundId && idToMockData[selectedFundId];

  return (
    <>
      <StrategySelector onSelectFund={setSelectedFundId} />
      {data && <Fund data={data} />}
    </>
  );
};

export default Home;
