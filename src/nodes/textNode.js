// // textNode.js

// import { useState } from 'react';
// import { Handle, Position } from 'reactflow';

// export const TextNode = ({ id, data }) => {
//   const [currText, setCurrText] = useState(data?.text || '{{input}}');

//   const handleTextChange = (e) => {
//     setCurrText(e.target.value);
//   };

//   return (
//     <div style={{width: 200, height: 80, border: '1px solid black'}}>
//       <div>
//         <span>Text</span>
//       </div>
//       <div>
//         <label>
//           Text:
//           <input 
//             type="text" 
//             value={currText} 
//             onChange={handleTextChange} 
//           />
//         </label>
//       </div>
//       <Handle
//         type="source"
//         position={Position.Right}
//         id={`${id}-output`}
//       />
//     </div>
//   );
// }


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
    minWidth: `${Math.max(200, text.length * 8)}px`, // Scale width based on text length
    minHeight: `${Math.max(80, text.split('\n').length * 24)}px`, // Scale height based on line count
    backgroundColor: '#f1f8e9',
  };

  // Adjust textarea dimensions dynamically
  const textareaStyles = {
    width: `${Math.max(200, text.length * 8)}px`, // Scale width based on text length
    height: `${Math.max(80, text.split('\n').length * 24)}px`, // Scale height based on line count
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
