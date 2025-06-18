'use client';

import StrategySelector from '@/components/StrategySelector';
import Fund from '@/components/Fund';
import { idToMockData, MockIdsType } from '@/mocks/getMockById';
import useLocalStorage from '@/hooks/useLocalStorage';

const FundPage = () => {
  const [selectedFundId, setSelectedFundId] = useLocalStorage<MockIdsType>(
    'fundId',
    '',
  );
  const data = selectedFundId && idToMockData[selectedFundId];

  return (
    <>
      <StrategySelector onSelectFund={setSelectedFundId} />
      {data && <Fund data={data} />}
    </>
  );
};

export default FundPage;
