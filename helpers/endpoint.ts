export type AJBellResponseType = {
  data: {
    quote: {
      __typename: string;
      name: string;
      marketCode: string;
      lastPrice: number;
      lastPriceDate: string;
      ongoingCharge: number;
      sectorName: string;
      currency: string;
    };
    profile: {
      objective: string;
    };
    ratings: {
      analystRating: number;
      SRRI: number | null;
      analystRatingLabel: string;
    };
    documents: {
      id: string;
      type: string;
      url: string;
    }[];
    portfolio: {
      asset: {
        label: string;
        value: number;
      }[];
      top10Holdings: {
        name: string;
        weighting: number;
      }[];
    };
  };
};
