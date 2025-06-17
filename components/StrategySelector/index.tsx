interface IStrategySelector {
  investmentStrategies: {
    name: string;
    fundOptions: {
      fundName: string;
      id: string;
    }[];
  }[];
}

const StrategySelector = ({ investmentStrategies }: IStrategySelector) => (
  <>
    {investmentStrategies.map(({ name, fundOptions }) => (
      <div key={name}>
        <button>{name}</button>
        {/* todo remove inline styles */}
        <div
          style={{
            border: '1px solid red',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          {fundOptions.map(({ fundName, id }) => (
            <button key={id}>{fundName}</button>
          ))}
        </div>
      </div>
    ))}
  </>
);

export default StrategySelector;
