'use client';

import StrategySelector from '@/components/StrategySelector';
import Fund from '@/components/Fund';
import useLocalStorage from '@/hooks/useLocalStorage';

const FundPage = ({ allData }) => {
  const [selectedFundId, setSelectedFundId] = useLocalStorage<
    keyof typeof allData | ''
  >('fundId', '');

  const data = allData[selectedFundId];

  return (
    <>
      <StrategySelector onSelectFund={setSelectedFundId} />
      {data && <Fund data={data} />}
    </>
  );
};

export default FundPage;
