import { BaseNode } from '../baseNode';
import { useStore } from '../store';

export const KnowledgeBaseSearchNode = ({ id, data }) => {
  const updateField = useStore((state) => state.updateNodeField);

return (
    <BaseNode
        id={id}
        data={data}
        label="Knowledge Base Search"
        fields={[
            { 
                label: 'Upload File', 
                name: 'fileResource', 
                type: 'file', 
                accept: '.pdf,.docx', 
                onChange: updateField 
            },
            { 
                label: 'Blog/Research Link', 
                name: 'linkResource', 
                type: 'text', 
                onChange: updateField 
            },
        ]}
        handles={[
            { type: 'target', position: 'left', id: `${id}-input` },
            { type: 'source', position: 'right', id: `${id}-output` },
        ]}
        styles={{ backgroundColor: '#e3f2fd' }}
    />
);
};
