// inputNode.js

import { BaseNode } from "../baseNode";
import { useStore } from "../store";

export const InputNode = ({ id, data }) => {
  const updateField = useStore((state) => state.updateNodeField);

  return (
    <BaseNode
      id={id}
      data={data}
      label="Input Node"
      fields={[
        { label: 'Name', name: 'inputName', type: 'text', onChange: updateField },
        { label: 'Type', name: 'inputType', type: 'select', options: ['Text', 'File'], onChange: updateField },
      ]}
      handles={[
        { type: 'source', position: 'right', id: 'value' },
      ]}
      styles={{ backgroundColor: '#e3f2fd' }}
    />
  );
};