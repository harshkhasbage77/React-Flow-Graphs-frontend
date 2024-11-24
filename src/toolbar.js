// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200" style={{ padding: '10px' }}>
            <h2 className="text-lg font-semibold mb-4">Nodes</h2>
            <div className="flex flex-wrap gap-4" style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='knowledgeBaseSearch' label='Knowledge Base Search' />
                <DraggableNode type='CSVLoader' label='CSV Loader' />
                <DraggableNode type='SearchMessages' label='Search Messages' />
                <DraggableNode type='InvestmentMemo' label='Investment Memo' />
                <DraggableNode type='DocumentMeetingSummary' label='Document/Meeting Summary Connect' />
            </div>
        </div>
    );
};
