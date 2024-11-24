// llmNode.js

import { useState } from 'react';
import { BaseNode } from '../baseNode';
import { useStore } from '../store';

export const LLMNode = ({ id, data }) => {
  const updateField = useStore((state) => state.updateNodeField);

  return (
    <BaseNode
      id={id}
      data={data}
      label="LLM Node"
      handles={[
        { type: 'target', position: 'left', id: `${id}-system`, style: { top: '33%' } },
        { type: 'target', position: 'left', id: `${id}-prompt`, style: { top: '66%' } },
        { type: 'source', position: 'right', id: `${id}-response` },
      ]}
      styles={{ backgroundColor: '#fce4ec' }}
      fields={[
        { label: 'System', value: data.system, type: 'textarea', name: 'system', onChange: updateField },
        { label: 'Prompt', value: data.prompt, type: 'textarea', name: 'prompt', onChange: updateField },
        { label: 'Response', value: data.response, type: 'textarea', name: 'response', onChange: updateField },
        { label: 'Model', value: data.system, type: 'select', options: ['4o-model', 'GPT-3.5'], name: 'systemModel', onChange: updateField },
      ]}
    />
  );
};
