'use client';

import PageContainer from '../PageContainer';
import StrategySelector from '@/components/StrategySelector';
import Fund from '@/components/Fund';
import useLocalStorage from '@/hooks/useLocalStorage';

const FundPage = ({ allData }) => {
  const [selectedFundId, setSelectedFundId] = useLocalStorage<string>(
    'fundId',
    '',
  );

  const data = allData[selectedFundId];

  return (
    <PageContainer>
      <StrategySelector onSelectFund={setSelectedFundId} />
      {data && <Fund data={data} />}
    </PageContainer>
  );
};

export default FundPage;
