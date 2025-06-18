'use client';

import StrategySelector from '@/components/StrategySelector';
import Fund from '@/components/Fund';
import { idToMockData, MockIdsType } from '@/mocks/getMockById';
import useLocalStorage from '@/hooks/useLocalStorage';

const FundPage = ({ allData }) => {
  const [selectedFundId, setSelectedFundId] = useLocalStorage<MockIdsType>(
    'fundId',
    '',
  );
  const data = selectedFundId && idToMockData[selectedFundId];

  return (
    <>
      <StrategySelector onSelectFund={setSelectedFundId} />
      {data && <Fund data={data} />}
      <pre>{JSON.stringify(allData, null, 2)}</pre>
    </>
  );
};

export default FundPage;
