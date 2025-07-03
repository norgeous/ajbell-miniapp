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

const ids = [
  'BYW8RV9', // Cautious
  'BYW8RX1', // Balanced
  'BYW8VG2', // Adventurous
  'BN0S2V9', // Responsible
];

// https://nextjs.org/docs/app/api-reference/functions/fetch#fetchurl-options
const fetcher = (url: string) =>
  fetch(url, { cache: 'force-cache' })
    .then(res => {
      if (res.status !== 200) throw new Error('oof not 200');
      return res.json();
    })
    .catch(err => {
      console.warn('caught the error', err);
    });

export const fetchAll = () =>
  Promise.allSettled(
    ids.map(id =>
      fetcher(`https://cdn.core3-dev.ajbbuild.uk/interview/${id}.json`),
    ),
  ).then(responses =>
    responses.reduce(
      (acc, response, index) => ({
        ...acc,
        [ids[index]]: response.status === 'fulfilled' && response.value,
      }),
      {},
    ),
  );
