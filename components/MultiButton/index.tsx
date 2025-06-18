import Button from '@/components/Button';

interface IMultiButton {
  labels: string[];
  onClick: (label: string) => void;
}

const MultiButton = ({ labels, onClick }: IMultiButton) => {
  return (
    <div>
      {labels.map(label => (
        <Button key={label} onClick={() => onClick(label)}>
          {label}
        </Button>
      ))}
    </div>
  );
};

export default MultiButton;
