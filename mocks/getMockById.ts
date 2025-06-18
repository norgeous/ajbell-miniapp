import { AJBellResponseType } from '@/helpers/endpoint';
import cautiousMockData from './Cautious.json';
import balancedMockData from './Balanced.json';
import adventurousMockData from './Adventurous.json';
import responsibleMockData from './Responsible.json';

export const idToMockData = {
  BYW8RV9: cautiousMockData as AJBellResponseType,
  BYW8RX1: balancedMockData as AJBellResponseType,
  BYW8VG2: adventurousMockData as AJBellResponseType,
  BN0S2V9: responsibleMockData as AJBellResponseType,
};

export type MockIdsType = keyof typeof idToMockData | '';
