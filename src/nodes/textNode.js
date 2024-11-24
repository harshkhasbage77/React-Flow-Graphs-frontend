// textNode.js

import { useState } from 'react';
import { BaseNode } from '../baseNode';
import { useStore } from '../store';

export const TextNode = ({ id, data }) => {
  // console.log('data:', data);
  const updateField = useStore((state) => state.updateNodeField);

  const [handles, setHandles] = useState([]);
  const [text, setText] = useState(data?.text || '{{input}}');

  // Regex to extract variables in the {{variable}} format
  const variableRegex = /\{\{(\w+)\}\}/g;

  const handleTextChange = (nodeId, fieldName, newValue) => {
    setText(newValue);
    updateField(nodeId, fieldName, newValue);

    // Extract unique variables
    const variables = Array.from(newValue.matchAll(variableRegex)).map((match) => match[1]);
    setHandles([...new Set(variables)]); // Ensure unique handles
  };

  // Adjust node dimensions dynamically
  const dynamicStyles = {
    minWidth: `${Math.max(200, text.length * 8)}px`,
    minHeight: `${Math.max(80, text.split('\n').length * 24)}px`, 
    backgroundColor: '#f1f8e9',
  };

  // Adjust textarea dimensions dynamically
  const textareaStyles = {
    width: `${Math.max(200, text.length * 8)}px`, 
    height: `${Math.max(80, text.split('\n').length * 24)}px`, 
  };

  return (
    <BaseNode
      id={id}
      data={data}
      label="Text Node"
      fields={[
        { 
          label: 'Text', 
          name: 'text', 
          type: 'textarea', 
          text: data?.text || '{{input}}', 
          onChange: handleTextChange, 
          style: textareaStyles, // Apply dynamic styles to textarea
        },
      ]}
      handles={[
        ...handles.map((variable, index) => ({
          type: 'target',
          position: 'left',
          id: variable,
          style: { top: `${index * 30 + 40}px`, backgroundColor: '#555' },
        })),
        { type: 'source', position: 'right', id: 'output', style: { backgroundColor: '#555' } },
      ]}
      styles={dynamicStyles}
    />
  );
};
