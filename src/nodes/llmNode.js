// // llmNode.js

// import { Handle, Position } from 'reactflow';

// export const LLMNode = ({ id, data }) => {

//   return (
//     <div style={{width: 200, height: 80, border: '1px solid black'}}>
//       <Handle
//         type="target"
//         position={Position.Left}
//         id={`${id}-system`}
//         style={{top: `${100/3}%`}}
//       />
//       <Handle
//         type="target"
//         position={Position.Left}
//         id={`${id}-prompt`}
//         style={{top: `${200/3}%`}}
//       />
//       <div>
//         <span>LLM</span>
//       </div>
//       <div>
//         <span>This is a LLM.</span>
//       </div>
//       <Handle
//         type="source"
//         position={Position.Right}
//         id={`${id}-response`}
//       />
//     </div>
//   );
// }

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
