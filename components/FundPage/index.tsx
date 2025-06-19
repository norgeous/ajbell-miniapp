'use client';

import PageContainer from '../PageContainer';
import StrategySelector from '@/components/StrategySelector';
import Fund from '@/components/Fund';
import useLocalStorage from '@/hooks/useLocalStorage';
import { AJBellResponseType } from '@/helpers/endpoint';

interface IFundPage {
  allData: {
    [fundId: string]: AJBellResponseType;
  };
}

const FundPage = ({ allData }: IFundPage) => {
  const [selectedFundId, setSelectedFundId] = useLocalStorage<string>(
    'fundId',
    '',
  );

  const data = allData[selectedFundId];

  return (
    <PageContainer>
      <StrategySelector onSelectFund={setSelectedFundId} />
      {selectedFundId && !data && 'No Data =['}
      {data && <Fund data={data} />}
    </PageContainer>
  );
};

export default FundPage;
