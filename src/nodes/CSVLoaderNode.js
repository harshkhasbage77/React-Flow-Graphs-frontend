import { BaseNode } from '../baseNode';
import { useStore } from '../store';

export const CSVLoaderNode = ({ id, data }) => {
  const updateField = useStore((state) => state.updateNodeField);

return (
    <BaseNode
        id={id}
        data={data}
        label="CSV Loader"
        fields={[
            { 
                label: 'Upload CSV File', 
                name: 'csvFile', 
                type: 'file', 
                accept: '.csv,.xlsx', 
                onChange: updateField 
            },
        ]}
        handles={[
            { type: 'source', position: 'right', id: 'csvOutput' },
            { type: 'target', position: 'left', id: 'textQuery' },
        ]}
        styles={{ backgroundColor: '#fff3e0' }}
    />
);
};
