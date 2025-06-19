import Button from '@/components/Button';
import ResponsiveColumn from '@/components/ResponsiveColumn';

interface IMultiButton {
  labels: string[];
  onClick: (label: string) => void;
}

const MultiButton = ({ labels, onClick }: IMultiButton) => {
  return (
    <ResponsiveColumn>
      {labels.map(label => (
        <Button key={label} onClick={() => onClick(label)}>
          {label}
        </Button>
      ))}
    </ResponsiveColumn>
  );
};

export default MultiButton;
