import { BaseNode } from '../baseNode';
import { useStore } from '../store';

export const InvestmentMemoNode = ({ id, data }) => {
  const updateField = useStore((state) => state.updateNodeField);

  return (
    <BaseNode
      id={id}
      data={data}
      label="Write Investment Memo"
      fields={[
        { label: 'Exa AI API Key', name: 'apiKey', type: 'text', onChange: updateField },
      ]}
      handles={[
        { type: 'target', position: 'left', id: 'input' },
        { type: 'source', position: 'right', id: 'memoOutput' },
      ]}
      styles={{ backgroundColor: '#ede7f6' }}
    />
  );
};
