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


import { BaseNode } from '../baseNode';
import { useStore } from '../store';

export const TextNode = ({ id, data }) => {
  // console.log('data:', data);
  const updateField = useStore((state) => state.updateNodeField);

  return (
    <BaseNode
      id={id}
      data={data}
      label="Text Node"
      fields={[
        { label: 'Text', name: 'text', type: 'text', text: data?.text || '{{input}}', onChange: updateField },
      ]}
      handles={[
        { type: 'source', position: 'right', id: 'output' },
      ]}
      styles={{ backgroundColor: '#f1f8e9' }}
    />
  );
};
