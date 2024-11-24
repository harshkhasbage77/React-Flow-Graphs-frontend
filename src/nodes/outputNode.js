// outputNode.js

import { BaseNode } from '../baseNode';
import { useStore } from '../store';

export const OutputNode = ({ id, data }) => {
  const updateField = useStore((state) => state.updateNodeField);

  return (
    <BaseNode
      id={id}
      data={data}
      label="Output Node"
      fields={[
        { label: 'Name', name: 'outputName', type: 'text', onChange: updateField },
        { label: 'Type', name: 'outputType', type: 'select', options: ['Text', 'Image'], onChange: updateField },
      ]}
      handles={[
        { type: 'target', position: 'left', id: 'value' },
      ]}
      styles={{ backgroundColor: '#ede7f6' }}
    />
  );
};